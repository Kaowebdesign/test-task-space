// Core


import {useAppSelector} from "../../../../store/redux";

export const useProcessCardEf = () => {

    const { user } = useAppSelector(state => state.profile)

    return { user }
}
