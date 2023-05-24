// Core
import {useAppSelector} from "../../../../store/redux";
import { useLazyGetUserQuery } from '../../../profile'
import { useLazyGetAdditionalsQuery } from '../../../home'
import {useEffect} from "react";
import {useActions} from "../../../../store/actions";
import { userMock, additionsMock } from '../../../shared'


export const useHomeEf = () => {

    const [fetchUsers, { isLoading: isLoadingUser, data: usersData, error: errorUser }] = useLazyGetUserQuery()
    const [fetchAdditionals, { isLoading: isLoadingAdditionals, data: additionalData, error: errorAdditionals }] = useLazyGetAdditionalsQuery()

    const { setUser, setAdditions } = useActions()

    const { user } = useAppSelector(state => state.profile)
    const { additions } = useAppSelector(state => state.home)

    /**
     * Fetch user from mock server. If server was disabled put to store mock user object
     */
    useEffect(() => {
        fetchUsers()
    }, []);

    useEffect(() => {
        if (usersData) {
            setUser(usersData)
        }
    },[usersData])

    useEffect(() => {
        if (errorUser) {
            setUser(userMock)
        }
    },[errorUser])

    /**
     * Fetch additionals from mock server. If server was disabled put to store mock additionals object
     */
    useEffect(() => {
        fetchAdditionals()
    }, []);

    useEffect(() => {
        if (additionalData) {
            setAdditions(additionalData)
        }
    },[additionalData])

    useEffect(() => {
        if (errorAdditionals) {
            setAdditions(additionsMock)
        }
    },[errorAdditionals])


    return { user, additions, isLoadingUser }
}
