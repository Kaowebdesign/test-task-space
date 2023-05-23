// Core
import React, {FC, memo, useState} from 'react'
import styles from './Dropdown.module.css'
import {DownIcon} from "../../icons";
import clsx from "clsx";

type DropdownOption = {
    label: string,
    value: string
}

type PropsType = {
    children?: never,
    options: DropdownOption[],
    currentValue: string
    onChange: (value: string) => void,
}

const Dropdown: FC<PropsType> = memo(({ options, currentValue, onChange }) => {

    const [showList, setShowList] = useState(false)

    return (<div className={styles.dropdown}>
        <button className={styles.selected} onClick={() => setShowList(!showList)}>
            <span className={styles.label}>{ currentValue }</span>
            <div className={clsx(styles.icon, showList ? styles.reversed : '')}>
                <DownIcon />
            </div>
        </button>
       <ul className={clsx(styles.list, showList ? styles.open : '')}>
           {
               options.map((option: DropdownOption) => (
                   <li key={option.value} className={styles.item}>
                       <button className={styles.button} onClick={() => {
                           setShowList(false)
                           onChange(option.value)
                       }}>
                            {option.label}
                       </button>
                   </li>
               ))
           }
       </ul>
    </div>)
})

export {Dropdown}
