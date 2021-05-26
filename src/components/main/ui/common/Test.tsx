import React from 'react';
import s from './test.module.css'
import {ButtonTest} from "./button/ButtonTest";
import {InputTest} from "./input/InputTest";
import {CheckboxTest} from "./checkboxTest/CheckboxTest";

type PropsTestType = {}

export const Test: React.FC<PropsTestType> = props => {

    const {} = props

    return (
        <div className={s.container}>
            <ButtonTest/>
            <InputTest/>
            <CheckboxTest/>
        </div>
    );
}
