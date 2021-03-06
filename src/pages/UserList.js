import React, { useEffect } from 'react'
import UserItem from '../components/UserItem'
import { usePagination } from '../hooks/usePagination'


function UserList() {
  const {usersList} = JSON.parse(localStorage.getItem('users'))
  // ===== пагинация
  const {paginator, sortList, sortarray, curentPage, setCurentPage, itemsInPage} = usePagination() 

  useEffect(()=> {
    if(usersList){
      if(!sortarray){
        sortList(usersList,'createDate')
      }
    }
  }, [sortarray, sortList, usersList])

  if(usersList)  {
    // получаем необходимое число страниц для пагинации
    const pages = Math.ceil(usersList.length/itemsInPage)
    // указывем длинну массива и подготавливаем массив для модификации
    const numiration = new Array(pages).fill(1)
    // заполняем массив номерами страниц 
    numiration.forEach((num, index) => {numiration[index] = num + index})
    // получаем список пользователей для отображения на странице
    const list = paginator(sortarray, curentPage * itemsInPage - itemsInPage, curentPage * itemsInPage - 1)

    return (
      <div className="container">
        <div className="users_tabl">
          <h3>Список участников</h3>
          <table>
            <tbody>
              <tr className="users_tabl_head">
                <th onClick={() => {sortList(usersList,'fio')}}>ФИО</th>
                <th onClick={() => {sortList(usersList,'createDate')}}>Дата создания заявки</th>
                <th onClick={() => {sortList(usersList,'email')}}>Email</th>
                <th onClick={() => {sortList(usersList,'distance')}}>Дистанция</th>
                <th onClick={() => {sortList(usersList,'donations')}}>Сумма взноса</th>
              </tr>
              {list.map((user, index) => {
                return <UserItem user={user} key={index}/>
              })}
            </tbody>
          </table>
          <div className="paginator">
            {numiration.map((num, index) => { 
              return <h3 className={`paginator_item ${curentPage === num? 'paginator_item--activ' : ''}`}
                      onClick={() => {
                        setCurentPage(num)
                      }} 
                      id={index} 
                      key={index} >{num}</h3>})
            }
          </div>
          <div className="form_a">
            <a href='/'>на главную</a> 
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container">
      </div>
    )
  }  
}

export default UserList;