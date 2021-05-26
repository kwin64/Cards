import React from 'react';
import s from './inputTest.module.css'

type PropsTestType = {}

export const InputTest: React.FC<PropsTestType> = props => {

    const {} = props

    return (
        <input className={s.searchInput}
               placeholder='Search..'
        />
    );
}
