import React from "react";
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';

ReactDOMClient.hydrateRoot(
    document.querySelector("#root"),
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
)
