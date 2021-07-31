import { ADD_USERSDATA, REMOVE_USERSDATA, UPDATE_USERSDATA } from "../typs";

export function addUsersData(data) {
    return {
        type: ADD_USERSDATA,
        payload: data
    }
}

export function updateUsersData(data) {
    return {
        type: UPDATE_USERSDATA,
        payload: data
    }
}

export function removeUsersData() {
    return {
        type: REMOVE_USERSDATA
    }
}