import { ADD_PROFILE, REMOVE_PROFILE } from "./typs"

const initialState = {
    profile : null,
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