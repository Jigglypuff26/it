import { ADD_PROFILE, REMOVE_PROFILE } from "../typs";

export function addProfile(profile) {
    return {
        type: ADD_PROFILE,
        payload: profile
    }
}

export function removeProfile() {
    return {
        type: REMOVE_PROFILE
    }
}