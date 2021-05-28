import {Suspense} from 'react';
import {Route} from "react-router-dom";
import Home from './blocks/home.js'
import Architect from "./blocks/architect";

export default function App(){
    return(
        <Suspense fallback={null}>
            <Route exact path="/" component={Home} />
            <Route component={Architect}/>
        </Suspense>
    );
}