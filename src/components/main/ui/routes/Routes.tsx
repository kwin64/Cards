import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Authorization} from '../../../features/auth/login/Authorization';
import {Registration} from '../../../features/auth/register/Registration';
import {UpdatePassword} from '../../../features/auth/updatePassword/UpdatePassword';
import {ErrorPage} from '../errorPage/ErrorPage';
import {Profile} from "../Profile/Profile";
import {RecoveryPassword} from "../../../features/auth/recoveryPassword/RecoveryPassword";
import {Test} from "../common/Test";


export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/profile' render={() => <Profile/>}/>
            <Route path='/authorization' render={() => <Authorization/>}/>
            <Route path='/registration' render={() => <Registration/>}/>
            <Route path='/404' render={() => <ErrorPage/>}/>
            <Route path='/update' render={() => <UpdatePassword/>}/>
            <Route path='/recoveryPassword' render={() => <RecoveryPassword/>}/>
            <Route path='/test' render={() => <Test/>}/>
            <Redirect from={'*'} to={'404'}/>
        </Switch>
    )
}