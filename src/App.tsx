import React from 'react';
import './App.module.css';
import {Main} from "./components/main/Main";
import {Routes} from './components/main/ui/routes/Routes';


export const App = () => {
    return (
        <div>
            <>
                <Main/>
            </>
            <Routes/>
        </div>
    )
}