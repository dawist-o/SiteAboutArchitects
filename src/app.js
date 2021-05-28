import {Suspense} from 'react';
import {Route} from "react-router-dom"
import Home from './blocks/home.js'
import Architect from "./blocks/architect"
import SearchPage from "./blocks/list"

export default function App(){
    return(
        <Suspense fallback={null}>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchPage}/>
            <Route exact path="/architect/:id" component={Architect}/>
        </Suspense>
    );
}