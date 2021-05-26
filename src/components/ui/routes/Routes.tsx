import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';


export const Routes = () => {
    return (
        <Switch>
            <Route exact path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/authorization'} render={() => <Authorization/>}/>
            <Route path={'/registration'} render={() => <Registration/>}/>
            <Route path={'/404'} render={() => <ErrorPage/>}/>
            <Route path={'/update'} render={() => <UpdatePassword/>}/>
            <Route path={'/enter'} render={() => <EnteringPassword/>}/>
            <Route path={'/test'} render={() => <Test/>}/>
            <Redirect from={'*'} to={'/404'}/>
        </Switch>
    )
}