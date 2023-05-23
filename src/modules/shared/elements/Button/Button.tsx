// Core
import React, {FC, memo, ReactElement} from 'react'
import styles from './Button.module.css'
import clsx from "clsx";

type PropsType = {
    children?: never,
    label?: string,
    icon?: ReactElement,
    className?: string,
    handlerClick: () => void
}

const Button: FC<PropsType> = memo(({ label, icon, className, handlerClick }) => {

    return (<button
        className={clsx(styles.button, className)}
        onClick={handlerClick}
    >
        {
            icon
            ? icon
            : null
        }
        {
            label
            ? label
            : null
        }
    </button>)
})

export {Button}
