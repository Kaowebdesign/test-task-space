// Core
import React, {FC, memo} from 'react'
import i18n from "i18next";
import styles from './Navbar.module.css'
import {
    NavCoursesIcon,
    NavGuidelineIcon,
    NavHomeIcon,
    NavLibsIcon,
    NavLogoutIcon,
    NavStatisticsIcon
} from "../../icons";
import { NavLink } from "react-router-dom";
import clsx from "clsx";


type PropsType = {
    children?: never
}

const Navbar: FC<PropsType> = memo(() => {
    const navs = [
        {
            label: `${i18n.t('navs.home')}`,
            value: '/',
            icon: <NavHomeIcon />,
            divider: false
        },
        {
            label: `${i18n.t('navs.courses')}`,
            value: '/courses',
            icon: <NavCoursesIcon />,
            divider: false
        },
        {
            label: `${i18n.t('navs.libraries')}`,
            value: '/libraries',
            icon: <NavLibsIcon />,
            divider: false
        },
        {
            label: `${i18n.t('navs.statistics')}`,
            value: '/statistics',
            icon: <NavStatisticsIcon />,
            divider: true
        },
        {
            label: `${i18n.t('navs.guideline')}`,
            value: '/guideline',
            icon: <NavGuidelineIcon />,
            divider: false
        },
    ]

    return (<nav className={styles.navbar}>
        <ul className={styles.list}>
            {
                navs.map((nav) => (
                        <li key={nav.value} className={clsx(styles.item, nav.divider ? styles.divider : '')}>
                            <NavLink
                                to={nav.value}
                                className={({ isActive }) => isActive ? clsx(styles.active, styles.link) : styles.link}
                            >
                                <span className={styles.icon}>
                                    {nav.icon}
                                </span>
                                {nav.label}
                            </NavLink>
                        </li>
                    )
                )
            }
        </ul>
        <NavLink
            to={'#'}
            className={styles.link}
        >
                <span className={styles.icon}>
                    <NavLogoutIcon />
                </span>
            {i18n.t('navs.logout')}
        </NavLink>
    </nav>)
})

export {Navbar}
