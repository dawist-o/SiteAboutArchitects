import Header from './blocks/header'
import RouterElement from './blocks/routerElement'

import {Container, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import React from 'react';
import {BrowserRouter} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <CssBaseline/>
                <MuiThemeProvider>
                    <Header/>
                    <Container maxWidth="lg">
                        <main>
                            <RouterElement/>
                        </main>
                    </Container>
                </MuiThemeProvider>
            </React.Fragment>
        </BrowserRouter>
    );
}