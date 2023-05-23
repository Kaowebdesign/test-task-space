import {baseQueryWithReauth} from "../../shared/service/re-auth.service";
import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {User} from "../models/profile.model";

export const userService = createApi({
    reducerPath: 'applications/service',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        getUser: build.query<User, void>({
            query: () => ({
                url: '/user',
            })
        }),
    }),
})

export const {
    useLazyGetUserQuery
} = userService
