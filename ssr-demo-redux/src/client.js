import React from "react";
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from './routes';
import store from './store';

// 注水
ReactDOMClient.hydrateRoot(
    document.querySelector("#root"),
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
)
