import React from 'react';
import ReactDomServer from 'react-dom/server';
import Routes from './routes';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from "react-redux";
import createStoreInstance from './store';
import { routesConfig } from './routes';

const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('build/public'));

app.get('*', (req, res) => {
    console.log('url', req?.url);
    const store = createStoreInstance();
    console.log('routesConfig', routesConfig);
    const promises = routesConfig?.map((route) => {
        const component = route?.component;
        if (route?.path === req?.url && component?.getInitialData) {
            return component?.getInitialData(store);
        } else {
            return null;
        }
    });

    Promise.all(promises).then(() => {
        const preloadedState = store.getState();
        const content = ReactDomServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Routes />
                </StaticRouter>
            </Provider>
        )
        const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
                </script>
                <script src="bundle_client.js"></script>
            </body>
        </html>
    `;

        res.writeHead(200, {
            'content-type': 'text/html;charset=utf8',
        })
        res.end(html);
    });
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})
