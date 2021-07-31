import React, { useEffect, useRef, useState } from 'react'
import Inputmask from "inputmask"
import validator from 'validator';
import { UserProfile } from '../models/UserProfile'
import { useDispatch, useSelector } from 'react-redux';
import { updateUsersData } from '../redux/actions/usersDataActions';

function StartPage() {
  const dispatch = useDispatch()
  const usersList = useSelector(state => state.usersDataReduser.users)
  const form = useRef({ ...UserProfile })
  const [activBtn, setActivBtn] = useState(false) 
   
  // очищает форму при использовании
  const changeHandler = event => {
    form.current = {...form.current, [event.target.name]: event.target.value}    
    if(form.current.fio && form.current.birthday && form.current.email 
        && form.current.password && form.current.phone 
        && form.current.distance && form.current.donations
        && form.current.confirmation ) {
          setActivBtn(true)
          // получаем год с дыты из формы
          // console.log(new Date(form.current.birthday).getFullYear())
        }
  }

  const logHandler = () => {
    // проверка на валидацию
    if(validator.isEmail(form.current.email) && form.current.donations >= 200 && form.current.donations <= 10000) {
      form.current.id = usersList[usersList.length - 1].id + 1
      form.current.createDate = Date.now()
      console.log(form.current)
      dispatch(updateUsersData(form.current))
      // отчистка формы и состояния формы
      const valueInput = document.querySelectorAll('input')
      valueInput.forEach(element => {element.value = ""})
      form.current = {...UserProfile}
      setActivBtn(false)
    }
  }

  // скрипты при создании компонента
  useEffect(() => {
    // console.log(new Date());
    const dateInput = document.getElementById('birthday')
    dateInput.valueAsDate = new Date()
    // маси для импутов
    const selector = document.getElementById("phone")
    const im = new Inputmask("+7 999 999 99 99")
    im.mask(selector)
    // Записываем в storege здесь, т.к. нет сервера для сохранения данных
    localStorage.setItem('users', JSON.stringify({
      usersList
    }))
  }, [usersList])

    
  return (
    <div className="container">
      <h2>Регистрация на марафон</h2>
        <div className="AuthForm">
          <div className="AuthForm__value">
            <label className="AuthForm__label" htmlFor="email">Введите ваше Ф.И.О.</label>
            <input
                  className="AuthForm__input"
                  placeholder="Ф.И.О."
                  id="fio"
                  name="fio"
                  type="text"
                  onChange={changeHandler}/>
          </div>
          <div className="AuthForm__value">
            <label className="AuthForm__label" htmlFor="email">Датаа рожения</label>
            <input
                  className="AuthForm__input"
                  id="birthday"
                  name="birthday"
                  type="date"
                  onChange={changeHandler}
                  required/>
          </div>
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
          <div className="AuthForm__value">
              <label className="AuthForm__label" htmlFor="phone">Введите ваш  Телефон</label>
              <input
                className="AuthForm__input"
                placeholder="Введите номер телефона"
                id="phone"
                name="phone"
                type="tel"
                onChange={changeHandler}/>
          </div>
          <div className="AuthForm__value">
              <label className="AuthForm__label" htmlFor="email">Дистанция в км.</label>
              <select className="AuthForm__input"
                  id="distance"
                  name="distance"
                  onChange={changeHandler}>
                    <option>Выберете дистанцию</option>
                    <option>3</option>
                    <option>5</option>
                    <option>10</option>
              </select>
          </div>
          <div className="AuthForm__value">
              <label className="AuthForm__label" htmlFor="email">Сумма взноса</label>
              <input
                  className="AuthForm__input"
                  placeholder="от 100 до 10 000"
                  id="donations"
                  name="donations"
                  type="number"
                  onChange={changeHandler}/>
          </div>          
          <div className="AuthForm__value">
              <label className="AuthForm__label" htmlFor="email">Согласие на создание профиля </label>
              <input
                  className="AuthForm__input"
                  placeholder="от 100 до 10 000"
                  id="confirmation"
                  name="confirmation"
                  type="checkbox"
                  onChange={changeHandler}/>
          </div>          
          <button className={`${activBtn ? '' : 'no-click'}`} id="btn" onClick={logHandler}>войти</button><br/>
      </div>
      <a href='/participants'>Список участников</a><br/>
      <a href='/login'>Воити в профиль</a>
    </div>
  );
}

export default StartPage;