// Core
import React, {FC, memo, ReactElement} from 'react'
import styles from './Input.module.css'
import clsx from "clsx";

type PropsType = {
    children?: never,
    icon?: ReactElement,
    placeholder?: string
}

const Input: FC<PropsType> = memo(({ placeholder, icon }) => {

    return (<div className={clsx(styles.input)}>
        <span className={styles.icon}>
            { icon }
        </span>
        <input
            placeholder={placeholder}
            className={clsx(styles.field, icon ? styles.iconed : '')}
        />
    </div>)
})

export {Input}
