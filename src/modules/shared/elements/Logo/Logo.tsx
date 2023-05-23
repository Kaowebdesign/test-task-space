// Core
import React, {FC, memo} from 'react'
import logoSrc from '../../../../assets/img/logo.svg'
import styles from './Logo.module.css'

type PropsType = {
    children?: never
}

const Logo: FC<PropsType> = memo(() => {

    return (<div className={styles.logo}>
        <img src={logoSrc} alt={'Logotype'} />
    </div>)
})

export {Logo}
