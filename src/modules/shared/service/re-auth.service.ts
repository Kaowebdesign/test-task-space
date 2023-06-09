import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
//@ts-ignore
import { Mutex } from 'async-mutex'
import {RootState} from "../../../store";

// create a new mutex
const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
})

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
    > = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock()
    let result: any = await baseQuery(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()
            try {
                const token = 'some token'

                const refreshResult: any = await fetch('http://localhost:3000/auth/refresh', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => response.json())

                if (refreshResult) {
                    // refresh token logic

                    // retry the initial query
                    result = await baseQuery(args, api, extraOptions)
                } else {
                    // something else
                }
            } finally {
                // release must be called once the mutex should be released again.
                release()
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }
    return result
}

export { baseQueryWithReauth }
