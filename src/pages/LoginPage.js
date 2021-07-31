import React, { useRef, useState } from 'react'

function LoginPage() {
    const form = useRef({
        email: null,
        password: null
    })
    const [activBtn, setActivBtn] = useState(false)

    // очищает форму при использовании
    const changeHandler = event => {
      form.current = {...form.current, [event.target.name]: event.target.value}
      if(form.current.email && form.current.password) {
        setActivBtn(!activBtn)
      }
    }

    const logHandler = () => {
        console.log(form.current)
        const valueInput = document.querySelectorAll('input')
        valueInput.forEach(element => {element.value = ""})
        form.current = { email: null, password: null }
        setActivBtn(!activBtn)
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