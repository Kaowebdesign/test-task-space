// Core
import React, {FC, memo} from 'react'
// Hook
import {useHomeEf} from './useHomeEf'
import {ProcessCard} from "../../components/ProcessCard/ProcessCard";
import {PlanetView} from "../../components/PlanetView/PlanetView";
import styles from './Home.module.css'
import {CompletedCard} from "../../elements";
import {AdditionalCard} from "../../elements/AdditionalCard/AdditionalCard";

type PropsType = {
    children?: never
}

const Home: FC<PropsType> = memo(() => {
    const { user, additions } = useHomeEf()

    return (<main>
        <div className={styles.container}>
            <ProcessCard />
            <div className={styles.right}>
                <PlanetView />
                <div className={styles.completeList}>
                    {
                        user?.completed?.length
                        ?  user?.completed.map(complete => (
                            <div className={styles.completeItem}  key={complete.type}>
                                <CompletedCard
                                    count={complete.count}
                                    total={complete.total}
                                    label={complete.label}
                                    type={complete.type}
                                />
                            </div>
                        ))
                        : null
                    }
                </div>
            </div>
        </div>
        <div className={styles.additionals}>
            {
                additions?.length
                    ? additions.map(additional => (<div key={additional.id} className={styles.additionalItem}>
                        <AdditionalCard
                            title={additional.title}
                            bookCount={additional.bookCount}
                            userCount={additional.userCount}
                            gallery={additional.gallery}
                        />
                    </div>))
                : null
            }
        </div>
    </main>)
})

export {Home}
