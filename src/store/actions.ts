import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import {profileActions} from "../modules/profile/store/profile.slice";
import {homeActions} from "../modules/home/store/home.slice";

const actions = {
    ...profileActions,
    ...homeActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
