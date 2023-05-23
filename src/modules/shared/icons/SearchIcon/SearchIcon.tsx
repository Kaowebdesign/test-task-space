// Core
import React, {CSSProperties, FC, memo} from 'react'
import clsx from "clsx";

type PropsType = {
    children?: never,
    style?: CSSProperties,
    className?: string | Object,
}

const SearchIcon: FC<PropsType> = memo(({ style, className}) => {

    return (<>
        <svg style={style} className={clsx(className)} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.76659" cy="9.76659" r="8.98856" stroke="#939495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.0183 16.4851L19.5423 20" stroke="#939495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </>)
})

export { SearchIcon }
