// Core
import React, {FC, memo, ReactElement} from 'react'
import styles from './Container.module.css'
import clsx from "clsx";

type Padding = 'lg' | 'md' | 'sm'

type PropsType = {
    children: ReactElement,
    padding: Padding
}

const Container: FC<PropsType> = memo(({ children, padding }) => {


    return (<div className={clsx(styles.container, styles[padding])}>
        {
            children
        }
    </div>)
})

export {Container}
