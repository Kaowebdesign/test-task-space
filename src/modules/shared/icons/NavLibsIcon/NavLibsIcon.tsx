// Core
import React, {CSSProperties, FC, memo} from 'react'
import clsx from "clsx";

type PropsType = {
    children?: never,
    style?: CSSProperties,
    className?: string | Object,
}

const NavLibsIcon: FC<PropsType> = memo(({ style, className}) => {

    return (<>
        <svg style={style} className={clsx(className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19 6.58574C19 4.0261 17.3055 3 14.8659 3L9.13677 3C6.77213 3 5 3.95614 5 6.41504L5 20.1153C5 20.7907 5.70361 21.216 6.27355 20.8858L12.0235 17.5547L17.7237 20.8802C18.2946 21.2123 19 20.7869 19 20.1106L19 6.58574Z" stroke="#939495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.53906 9.26028L15.3278 9.26028" stroke="#939495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </>)
})

export { NavLibsIcon }
