import { ADD_USERSDATA, REMOVE_USERSDATA, UPDATE_USERSDATA } from "./typs"
import { users } from "../json/Users.json"

const reuest = (data) => {
    return data
}

const initialState = {
    users: reuest(users),
}

export const usersDataReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERSDATA:
            return {...state, users: action.payload}
        case UPDATE_USERSDATA:
            return {...state, users: [...state.users, action.payload]}
        case REMOVE_USERSDATA:
            return {...state, users:  null}
        default: return state
    }
}