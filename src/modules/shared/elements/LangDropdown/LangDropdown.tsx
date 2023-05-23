// Core
import React, {FC, memo} from 'react'
// Hook
import {useLangDropdownEf} from './useLangDropdownEf'
import {Dropdown} from "../Dropdown/Dropdown";
import clsx from "clsx";

type PropsType = {
    children?: never,
    className?: string
}

const LangDropdown: FC<PropsType> = memo(({ className }) => {
    const { langOptions, lang, setLang } = useLangDropdownEf()

    return (<div className={clsx(className)}>
        <Dropdown
            options={langOptions}
            currentValue={lang}
            onChange={(value: string) => setLang(value)}
        />
    </div>)
})

export {LangDropdown}
