// Core
import React, {CSSProperties, FC, memo} from 'react'
import clsx from "clsx";

type PropsType = {
    children?: never,
    style?: CSSProperties,
    className?: string | Object,
}

const DownIcon: FC<PropsType> = memo(({ style, className}) => {

    return (<>
        <svg style={style} className={clsx(className)} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6666 6.16667L7.99998 10.8333L3.33331 6.16667" stroke="#939495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </>)
})

export { DownIcon }
