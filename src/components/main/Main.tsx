import React from 'react';
import {NavLink} from "react-router-dom";
import s from './main.module.css'

export const Main = () => {
    return (
        <div>
            <nav>
                <ul className={s.menu}>
                    <li className={s.link}>
                        <NavLink to={'/profile'}>Profile</NavLink>
                    </li>
                    <li className={s.link}>
                        <NavLink to={'/authorization'}>Authorization</NavLink>
                    </li>
                    <li className={s.link}>
                        <NavLink to={'/registration'}>Registration</NavLink>
                    </li>
                    <li className={s.link}>
                        <NavLink to={'/update'}>Update password</NavLink>
                    </li>
                    <li className={s.link}>
                        <NavLink to={'/recoveryPassword'}>Recovery password</NavLink>
                    </li>
                    <li className={s.link}>
                        <NavLink to={'/test'}>Test</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}