// Core
import React, {FC, memo} from 'react'
import styles from './Header.module.css'
import clsx from "clsx";
import {Input} from "../Input/Input";
import i18n from "i18next";
import {SearchIcon} from "../../icons/SearchIcon/SearchIcon";
import {Info} from "../../../profile";
import {Button} from "../Button/Button";
import {BellIcon} from "../../icons";
import {LangDropdown} from "../LangDropdown/LangDropdown";
import {useAppSelector} from "../../../../store/redux";



type PropsType = {
    children?: never,
    title?: string,
    // handler for navigation back
    handlerBack?: () => void,
    className?: string
}

const Header: FC<PropsType> = memo(({ title, handlerBack, className }) => {

    const { user } = useAppSelector(state => state.profile)

    return (<header className={clsx(styles.header, 'bgc-primary')}>
        <Input
            icon={<SearchIcon />}
            placeholder={`${i18n.t('header.placeholder')}`}
        />
        <div className={styles.content}>
            <LangDropdown className={styles.lang} />
            <Button
                handlerClick={() => {}}
                className={styles.notification}
                icon={<BellIcon />}
            />
            <Info username={user?.username || ''} role={user?.role?.toLowerCase() || ''} />
        </div>
    </header>)
})

export { Header }
