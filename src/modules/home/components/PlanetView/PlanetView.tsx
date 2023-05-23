// Core
import React, {FC, memo} from 'react'
import styles from './PlanetView.module.css'
import planerSrc from '../../../../assets/img/space-bg.svg'
import {Label} from "../../../shared";
import i18n from "i18next";
import {useAppSelector} from "../../../../store/redux";

type PropsType = {
    children?: never,
}

const PlanetView: FC<PropsType> = memo(() => {

    const { user } = useAppSelector(state => state.profile)

    return (<div className={styles.container}>
        <img src={planerSrc} alt={'planet view'} />
        <Label title={`${user?.progress}% ${i18n.t('planet.label')}`} size={'md'} className={styles.label} />
    </div>)
})

export {PlanetView}
