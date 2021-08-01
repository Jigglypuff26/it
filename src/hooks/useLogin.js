import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addProfile, removeProfile } from '../redux/actions/profileActions'

export const useLogin = () => {
    const dispatch = useDispatch()

    const loginUser = useCallback((enterEmail, pass) => {
        let {usersList} = JSON.parse(localStorage.getItem('users'))
        const user = usersList.filter((user) => {return user.email === enterEmail})
        if(user.length) {
            const access = user[0].password === pass
            if(access) {
                const data = user[0]
                localStorage.setItem('userProfile', JSON.stringify({data}))
                dispatch(addProfile(data))
            } else {
                alert('Неверный логин или пароль1')
            }
        } else {
            alert('Неверный логин или пароль')
        }
    }, [dispatch])



    const logOut = useCallback (() => {
        localStorage.removeItem('userProfile')
        dispatch(removeProfile())
    }, [dispatch])
    return {loginUser, logOut}
}