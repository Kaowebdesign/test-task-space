// Core
import React, {FC, memo, ReactElement} from 'react'
import {Container} from "../../../shared";
import progressMSrc from '../../../../assets/img/progress-size-m.svg'
import styles from './CompletedCard.module.css'
import coursesSrc from '../../../../assets/img/courses.svg'
import foldersSrc from '../../../../assets/img/folders.svg'
import booksSrc from '../../../../assets/img/guideline.svg'

type PropsType = {
    children?: never,
    count: number,
    total: number,
    type: string,
    label: string
}

const CompletedCard: FC<PropsType> = memo(({ count, total, type, label }) => {

    const completeIcon = {
        'Courses': <img src={coursesSrc} alt={'Courses'} />,
        'Folders': <img src={foldersSrc} alt={'Courses'} />,
        'Books': <img src={booksSrc} alt={'Courses'} />,
    } as { [key: string]: ReactElement }


    return (<Container padding={'md'}>
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                { completeIcon[type] }
                <img src={progressMSrc} alt={'progress'} className={styles.progressLine} />
            </div>
            <div className={styles.content}>
                <div className={styles.countContainer}>
                    <span className={styles.count}>{`${count}`}</span>
                    <span className={styles.total}>{` / ${total}`}</span>
                </div>
                <span className={styles.label}>{ label }</span>
            </div>
        </div>
    </Container>)
})

export {CompletedCard}
