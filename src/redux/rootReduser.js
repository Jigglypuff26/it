import { combineReducers } from "redux"
import { profileReduser } from "./profileReduser"

// создаем rootReduser с помощью функ. combineReducers, которая принимет в себя набор редюсеров. Пример ниже
export const rootReduser = combineReducers({
    profileReduser,
})