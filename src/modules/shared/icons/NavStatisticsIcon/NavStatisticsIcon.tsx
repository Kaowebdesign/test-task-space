// Core
import React, {CSSProperties, FC, memo} from 'react'
import clsx from "clsx";

type PropsType = {
    children?: never,
    style?: CSSProperties,
    className?: string | Object,
}

const NavStatisticsIcon: FC<PropsType> = memo(({ style, className}) => {

    return (<>
        <svg style={style} className={clsx(className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.799 13.6942C17.4126 13.6942 17.9275 14.1993 17.8337 14.8038C17.2834 18.3597 14.232 20.9999 10.5517 20.9999C6.47996 20.9999 3.17969 17.7075 3.17969 13.6465C3.17969 10.3006 5.72763 7.18394 8.59623 6.47924C9.21263 6.32742 9.84436 6.75997 9.84436 7.39305C9.84436 11.6823 9.98889 12.7919 10.8053 13.3953C11.6218 13.9988 12.5818 13.6942 16.799 13.6942Z" stroke="#939495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M20.8129 10.1224C20.8617 7.36662 17.4686 2.92458 13.3337 3.00097C13.0121 3.0067 12.7546 3.27406 12.7402 3.59394C12.6359 5.85984 12.7766 8.79605 12.8551 10.1271C12.879 10.5415 13.2054 10.8672 13.6199 10.891C14.9915 10.9693 18.0419 11.0763 20.2807 10.7382C20.5851 10.6924 20.8081 10.4289 20.8129 10.1224Z" stroke="#939495" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </>)
})

export { NavStatisticsIcon }
