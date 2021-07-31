import { combineReducers } from "redux"
import { profileReduser } from "./profileReduser"
import { usersDataReduser } from "./usersDataReduser"

// создаем rootReduser с помощью функ. combineReducers, которая принимет в себя набор редюсеров. Пример ниже
export const rootReduser = combineReducers({
    profileReduser,
    usersDataReduser,
})