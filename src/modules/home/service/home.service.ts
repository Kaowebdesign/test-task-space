import {baseQueryWithReauth} from "../../shared/service/re-auth.service";
import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {Additions} from "../models/home.models";

export const homeService = createApi({
    reducerPath: 'home/service',
    baseQuery: baseQueryWithReauth,
    endpoints: (build) => ({
        getAdditionals: build.query<Additions[], void>({
            query: () => ({
                url: '/home/additionals',
            })
        }),
    }),
})

export const {
    useLazyGetAdditionalsQuery
} = homeService
