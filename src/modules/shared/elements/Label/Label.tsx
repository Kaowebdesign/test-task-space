// Core
import React, {FC, memo} from 'react'
import styles from './Label.module.css'
import clsx from "clsx";

type Size = 'sm' | 'md'

type PropsType = {
    children?: never,
    title: string,
    size: Size,
    className?: string
}

const Label: FC<PropsType> = memo(({ title, size, className }) => {

    return (<>
        <span className={clsx(styles.title, styles[size], className)}>{ title }</span>
    </>)
})

export {Label}
