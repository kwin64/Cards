import React from 'react';
import s from './test.module.css'
import {ButtonTest} from "./button/ButtonTest";
import {InputTest} from "./input/InputTest";

type PropsTestType = {}

export const Test: React.FC<PropsTestType> = props => {

    const {} = props

    return (
        <div className={s.container}>
            <ButtonTest/>
            <InputTest/>

            <input className={s.checkboxInput}
                   type="checkbox"
            />
            <input className={s.checkboxInput}
                   type="checkbox"
            />
            <input className={s.checkboxInput}
                   type="checkbox"
                   disabled={true}
            />
            <input className={s.checkboxInput}
                   type="checkbox"
                   disabled={true}
                   checked={true}
            />
        </div>
    );
}
