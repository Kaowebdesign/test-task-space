// Core
import React, {FC, memo} from 'react'
// Hook
import {useProcessCardEf} from './useProcessCardEf'
import {Container, Label} from "../../../shared";
import styles from './ProcessCard.module.css'
import i18n from "i18next";
import clsx from "clsx";
import progressSrc from '../../../../assets/img/progress-size-l.svg'
import progressPlanetSrc from '../../../../assets/img/planet-m-10.svg'

type PropsType = {
    children?: never
}

const ProcessCard: FC<PropsType> = memo(() => {
    const { user } = useProcessCardEf()

    return (<div className={styles.processCard}>
        {
            user
            && <Container padding={'lg'}>
                <div className={styles.content}>
                    <div className={styles.titleContainer}>
                        <h2 className={clsx(styles.title, 'typography_size_h1')}>{`${i18n.t('processCard.title')}, ${user.username} `}&#128075;</h2>
                        <p className={clsx(styles.desc, 'typography_size_body1 cl-secondary')}>{i18n.t('processCard.desc')}</p>
                    </div>
                    <div className={styles.planetContainer}>
                        {/* I didn't have enough time to implement process circle component :( So, I've used image */}
                        <img src={progressSrc} alt={'progress'} className={styles.planetProcess} />
                        <img src={progressPlanetSrc} alt={'planet'} className={styles.planet} />
                        <div className={styles.planetContent}>
                            <span className={styles.planetLevel}>{user.level}</span>
                            <Label className={styles.planetLabel} title={`${i18n.t('processCard.level')}`} size={'sm'} />
                        </div>
                    </div>
                    <p className={clsx(styles.reach, 'typography_size_body1 cl-secondary')}>{`${user.progress} ${i18n.t('processCard.reach')}`}</p>
                </div>
            </Container>
        }
    </div>)
})

export {ProcessCard}
