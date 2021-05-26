import React from 'react';
import s from './test.module.css'

type PropsTestType = {}

export const Test: React.FC<PropsTestType> = props => {

    const {} = props

    return (
        <div className={s.container}>
            <input className={s.searchInput}
                   placeholder='Search..'
            />
            <button>X</button>
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
