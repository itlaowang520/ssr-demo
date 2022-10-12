import React from "react";
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from './routes';
import createStoreInstance from './store';

const store = createStoreInstance(window?.__PRELOADED_STATE__);
console.log('store', store.getState());

ReactDOMClient.hydrateRoot(
    document.querySelector("#root"),
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
)
