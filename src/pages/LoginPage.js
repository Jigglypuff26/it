import React, { useRef, useState } from 'react'
import validator from 'validator'
import { useLogin } from '../hooks/useLogin'

function LoginPage() {
  const {loginUser} = useLogin()
    const form = useRef({
        email: null,
        password: null
    })
    const [activBtn, setActivBtn] = useState(false)

    // очищает форму при использовании
    const changeHandler = event => {
      form.current = {...form.current, [event.target.name]: event.target.value}
      if(form.current.email && form.current.password) {
        setActivBtn(true)
      }
    }

    const logHandler = () => {
      if(!validator.isEmail(form.current.email)) {
        alert('Введите корректный email')
      }
      if(!validator.isLength(form.current.password , {min:3, max: 10})) {
        alert('Длинна пароля должна быть от 3 до 10 символов')
      }
      if(validator.isEmail(form.current.email) && validator.isLength(form.current.password , {min:3, max: 10})) {
        console.log('Логин');
        loginUser(form.current.email, form.current.password)
        // отчистка форма и состояния формы
        const valueInput = document.querySelectorAll('input')
        valueInput.forEach(element => {element.value = ""})
        form.current = { email: null, password: null }
        setActivBtn(false)
      }
    }

  return (
      <div className="container">
        <h1>Вход в учентую запись пользователя</h1>
        <div className="AuthForm">
            <div className="AuthForm__value">
                <label className="AuthForm__label" htmlFor="email">Введите ваш email</label>
                <input
                    className="AuthForm__input"
                    placeholder="email"
                    id="email"
                    name="email"
                    type="email"
                    onChange={changeHandler}/>
            </div>
            <div className="AuthForm__value">
                <label className="AuthForm__label" htmlFor="email">Введите ваш  Пароль</label>
                <input
                    className="AuthForm__input"
                    placeholder="Пароль"
                    id="password"
                    name="password"
                    type="password"
                    onChange={changeHandler}/>
            </div>
            <button className={`${activBtn ? '' : 'no-click'}`} id="btn" onClick={logHandler}>войти</button><br/>
        </div>
        <a href='/participants'>Список участников</a><br/>
        <a href='/'>Зарегестрироваться</a>
      </div>      
    )
}

export default LoginPage;