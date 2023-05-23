import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../models/profile.model";


interface State {
    user: null | User
}

const initialState: State = {
    user: {
        username: 'Peter',
        role:  'Admin',
        level: 4,
        progress: '63%',
        completed: [
            {
                count: 3,
                total: 15,
                type: 'Courses',
                label: 'Courses completed'
            },
            {
                count: 6,
                total: 10,
                type: 'Folders',
                label: 'Folders add'
            },
            {
                count: 3,
                total: 19,
                type: 'Books',
                label: 'Books read'
            }
        ]
    }
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
