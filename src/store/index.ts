import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {profileReducer} from "../modules/profile/store/profile.slice";
import {homeReducer} from "../modules/home/store/home.slice";
import {userService} from "../modules/profile/service/profile.service";
import {homeService} from "../modules/home/service/home.service";

export const store = configureStore({
    reducer: {
        [userService.reducerPath]: userService.reducer,
        [homeService.reducerPath]: homeService.reducer,
        profile: profileReducer,
        home: homeReducer
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    //     userService.middleware,
    //     homeService.middleware,
    // ),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
