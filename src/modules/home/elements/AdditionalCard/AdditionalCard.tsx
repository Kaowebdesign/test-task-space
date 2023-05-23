// Core
import React, {FC, memo} from 'react'
import {Button, Container} from "../../../shared";
import styles from './AdditionalCard.module.css'
import iconSrc from '../../../../assets/img/plus-icon.svg'
import menuSrc from '../../../../assets/img/menu.svg'
import bookSrc from '../../../../assets/img/book.svg'
import userSrc from '../../../../assets/img/user-icon.svg'
import {GalleryItem} from "../../models/home.models";
import clsx from "clsx";

type PropsType = {
    children?: never,
    title: string,
    bookCount: number,
    userCount: number,
    gallery: GalleryItem[]
}

const AdditionalCard: FC<PropsType> = memo(({ title, bookCount, userCount, gallery }) => {

    return (<Container padding={'sm'}>
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <div className={styles.iconContainer}>
                        <img src={iconSrc} alt={'icon'} />
                    </div>
                    <h2 className={'typography_size_h2'}>{ title }</h2>
                </div>
                <Button handlerClick={() => {}} icon={<img src={menuSrc} alt={'open menu'} />} />
            </div>
            <div className={styles.content}>
                <div className={styles.countContent}>
                    <img src={bookSrc} alt={'books count'} />
                    <span className={styles.count}>{bookCount}</span>
                </div>
                <div className={styles.countContent}>
                    <img src={userSrc} alt={'users count'} />
                    <span className={styles.count}>{userCount}</span>
                </div>
            </div>
            <div className={styles.gallery}>
                {
                    gallery?.length
                    ? gallery.map((item, index) => (
                            <>
                                {
                                    index < 3
                                    &&  <div className={clsx(styles.galleryItem)} key={item.id}>
                                        <img src={item.src} alt={item.alt} />
                                        {
                                            gallery?.length > 3 && index === 2
                                            && <div className={styles.galleryItemOverlay}>
                                                <span className={styles.galleryCount}>{`+${gallery?.length - 3}`}</span>
                                            </div>
                                        }
                                    </div>
                                }
                            </>
                        ))
                    : null
                }

            </div>
        </div>
    </Container>)
})

export {AdditionalCard}
