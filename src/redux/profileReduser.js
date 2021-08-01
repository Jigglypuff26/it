import { ADD_PROFILE, REMOVE_PROFILE } from "./typs"

const user = () => {
    const data = JSON.parse(localStorage.getItem('userProfile'))
    if(data) {
        return data
    } else {
        return null
    }
}

const initialState = {
    profile : user(),
}

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE:
            return {...state, profile:  action.payload}
        case REMOVE_PROFILE:
            return {...state, profile: null}
        default: return state
    }
}