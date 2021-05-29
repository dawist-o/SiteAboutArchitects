import React, {Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import SearchPage from "./list";
import Home from "./home";
import Architect from "./architect";

function RouterElement() {
    return (
        <Switch fallback={null}>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchPage}/>
            <Route exact path="/architect/:id" component={Architect}/>
        </Switch>
    )
}

export default RouterElement