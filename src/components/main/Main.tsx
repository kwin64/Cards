import React from 'react';
import {NavLink} from "react-router-dom";
import s from 'main.module.css'

export const Main = () => {
    return (
        <div className={s.menu}>
            <nav>
                <ul>
                    <li><NavLink to={'/profile'}>Profile</NavLink></li>
                    <li><NavLink to={'/authorization'}>Authorization</NavLink></li>
                    <li><NavLink to={'/registration'}>Registration</NavLink></li>
                    <li><NavLink to={'/update'}>Update password</NavLink></li>
                    <li><NavLink to={'/recoveryPassword'}>Recovery password</NavLink></li>
                    <li><NavLink to={'/test'}>test</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}