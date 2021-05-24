import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import {Profile} from "./components/Profile";
import {Authorization} from "./components/Authorization";
import {Registration} from "./components/Registration";
import {UpdatePassword} from "./components/UpdatePassword";
import {EnteringPassword} from './components/EnteringPassword';
import {Test} from "./components/Test";
import {ErrorPage} from "./components/ErrorPage";

export function App() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} render={() => <Profile/>}/>
                <Route path={'/authorization'} render={() => <Authorization/>}/>
                <Route path={'/registration'} render={() => <Registration/>}/>
                <Route path={'/404'} render={() => <ErrorPage/>}/>
                <Route path={'/update'} render={() => <UpdatePassword/>}/>
                <Route path={'/enter'} render={() => <EnteringPassword/>}/>
                <Route path={'/test'} render={() => <Test/>}/>
                <Redirect from={'*'} to={'/404'}/>
            </Switch>
        </div>
    )
}