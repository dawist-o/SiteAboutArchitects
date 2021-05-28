import React from 'react';
import {
    render
} from 'react-dom';

import "./i18n";

//we should use "./" cause all paths are relative
import App from './app.js'
import { BrowserRouter } from 'react-router-dom';

//BrowseRouter keeps your UI in sync with the URL.
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);