// Core
import React, {CSSProperties, FC, memo} from 'react'
import clsx from "clsx";

type PropsType = {
    children?: never,
    style?: CSSProperties,
    className?: string | Object,
}

const NavHomeIcon: FC<PropsType> = memo(({ style, className}) => {

    return (<>
        <svg style={style} className={clsx(className)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.43638 19.896V17.1441C9.43638 16.4416 10.0067 15.8721 10.7102 15.8721H13.2818C13.6196 15.8721 13.9436 16.0061 14.1825 16.2446C14.4214 16.4832 14.5556 16.8067 14.5556 17.1441L14.5556 19.896C14.5535 20.1881 14.6682 20.4689 14.8742 20.6762C15.0803 20.8834 15.3607 21 15.6532 21H17.4076C18.227 21.0021 19.0136 20.6786 19.5938 20.1007C20.1739 19.5229 20.5 18.7383 20.5 17.92L20.5 10.0802C20.5 9.41921 20.2066 8.79226 19.6989 8.3682L13.7304 3.60828C12.6922 2.77371 11.2047 2.80065 10.1975 3.67228L4.36522 8.3682C3.8335 8.77976 3.5157 9.40857 3.5 10.0802L3.5 17.912C3.5 19.6175 4.8845 21 6.59237 21H8.30679C8.91426 21 9.40794 20.5106 9.41235 19.904L9.43638 19.896Z" stroke="#939495"/>
        </svg>
    </>)
})

export { NavHomeIcon }
