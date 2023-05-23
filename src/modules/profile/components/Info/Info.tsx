// Core
import React, {FC, memo} from 'react'
import styles from './Info.module.css'
import {Avatar} from "../../elements";

type PropsType = {
    children?: never,
    username: string,
    role: string
}

const Info: FC<PropsType> = memo(({ username, role }) => {

    return (<div className={styles.info}>
        <div className={styles.container}>
            <span className={styles.username}>{ username}</span>
            <span className={styles.role}>{ role }</span>
        </div>
        <Avatar badge={true} />
    </div>)
})

export {Info}
