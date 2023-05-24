import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../models/profile.model";


interface State {
    user: null | User
}

const initialState: State = {
    user: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
        },
    }
})

export const profileActions = profileSlice.actions
export const profileReducer = profileSlice.reducer
