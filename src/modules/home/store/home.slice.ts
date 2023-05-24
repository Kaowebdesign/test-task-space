import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Additions} from "../models/home.models";


interface State {
    additions: null | Additions[]
}

const initialState: State = {
    additions: null
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setAdditions(state, action: PayloadAction<Additions[]>) {
            state.additions = action.payload
        },

    }
})

export const homeActions = homeSlice.actions
export const homeReducer = homeSlice.reducer
