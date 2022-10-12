import React from 'react';
import ReactDomServer from 'react-dom/server';
import Routes from './routes';
import { StaticRouter } from 'react-router-dom/server';

const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('build/public'));

app.get('*', (req, res) => {
    const content = ReactDomServer.renderToString(
        <StaticRouter location={req.url}>
            <Routes />
        </StaticRouter>
    )
    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle_client.js"></script>
            </body>
        </html>
    `;

    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8',
    })
    res.end(html);
})

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})
