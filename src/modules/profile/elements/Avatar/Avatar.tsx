// Core
import React, {FC, memo} from 'react'
import styles from './Avatar.module.css'
import avatarSrc from './../../../../assets/img/avatar.jpg'

type PropsType = {
    children?: never,
    badge?: boolean
}

const Avatar: FC<PropsType> = memo(({ badge }) => {

    return (<div className={styles.avatar}>
        <img src={avatarSrc} alt={'avatar'} className={styles.image} />
        {
            badge
            ? <span className={styles.badge} />
            : null
        }
    </div>)
})

export {Avatar}
