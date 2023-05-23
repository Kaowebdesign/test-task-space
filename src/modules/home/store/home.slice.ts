import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Additions} from "../models/home.models";


interface State {
    additions: null | Additions[]
}

const initialState: State = {
    additions: [
        {
            id: 1,
            bookCount: 13,
            userCount: 2873,
            title: 'New Additions',
            gallery: [
                {
                    id: 1,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                },
                {
                    id: 2,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                },
                {
                    id: 3,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                },
                {
                    id: 10,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                }
            ]
        },
        {
            id: 2,
            bookCount: 13,
            userCount: 2873,
            title: 'New Additions',
            gallery: [
                {
                    id: 4,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                },
                {
                    id: 5,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                },
                {
                    id: 6,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                },
                {
                    id: 11,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                }
            ]
        },
        {
            id: 3,
            bookCount: 13,
            userCount: 2873,
            title: 'New Additions',
            gallery: [
                {
                    id: 7,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                },
                {
                    id: 8,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                },
                {
                    id: 9,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                },
                {
                    id: 12,
                    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    alt: 'back'
                }
            ]
        },
    ]
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
