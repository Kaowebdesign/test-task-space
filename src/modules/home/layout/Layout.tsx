// Core
import React, {FC, memo} from 'react'
import { Outlet } from "react-router-dom"
import styles from './Layout.module.css'
import {Header, Sidebar} from "../../shared";


type PropsType = {
    children?: never
}

const Layout: FC<PropsType> = memo(() => {
    return (<div className={styles.layout}>
        <Sidebar />
        <div className={styles.layoutRight}>
            <Header />
            <div className={styles.layoutContent}>
                <Outlet />
            </div>
        </div>
    </div>)
})

export { Layout }
