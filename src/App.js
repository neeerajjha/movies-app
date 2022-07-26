import React from 'react'
import Home from './components/Home';
import Login from './components/Login';
import New from './components/New';

import NavBar from "./components/NavBar";
import PageNotFound from './components/PageNotFound';

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
    return (
        <>
            {}
            <NavBar></NavBar>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/new">
                    <New></New>
                </Route>

                <Redirect from="/"  exact to="/home" >
                </Redirect>
                <Route>
                    <PageNotFound></PageNotFound>
                </Route>
            </Switch>
            {}
        </>
        
    )
}

export default App;