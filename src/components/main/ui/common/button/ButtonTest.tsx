import React from 'react';
import s from './button.module.css'

type PropsTestType = {}

export const ButtonTest: React.FC<PropsTestType> = props => {

    const {} = props

    return (
        <div className={s.container}>
            <button>X</button>
        </div>
    );
}
