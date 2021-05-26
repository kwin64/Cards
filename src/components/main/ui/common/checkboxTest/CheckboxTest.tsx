import React from 'react';
import s from './checkboxTest.module.css'

type PropsTestType = {}

export const CheckboxTest: React.FC<PropsTestType> = props => {

    const {} = props

    return (
        <label className={s.switch}>
            <input type='checkbox'
            />
            <span className={s.slider}/>
        </label>
    )
}