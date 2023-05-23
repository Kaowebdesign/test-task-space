// Core
import {useAppSelector} from "../../../../store/redux";


export const useHomeEf = () => {

    const { user } = useAppSelector(state => state.profile)
    const { additions } = useAppSelector(state => state.home)

    return { user, additions }
}
