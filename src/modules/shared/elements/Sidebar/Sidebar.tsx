// Core
import React, {FC, memo} from 'react'
import clsx from "clsx";
import {Logo} from "../Logo/Logo";
import {Navbar} from "../Navbar/Navbar";
import styles from './Sidebar.module.css'



type PropsType = {
    children?: never,
}

const Sidebar: FC<PropsType> = memo(() => {

    return (<aside className={clsx(styles.baseAside, 'bgc-primary')}>
        <Logo />
        <Navbar />
    </aside>)
})

export { Sidebar }
