import React from 'react'
import UserItem from '../components/UserItem'


function UserList() {
  const {usersList} = JSON.parse(localStorage.getItem('users'))

  if(usersList)  {
    return (
      <div className="container">
        <a href='/'>на главную</a> 
        <table border="1" width="100%">
          <tbody>
            <tr>
              <th>ФИО</th>
              <th>Дата создания заявки</th>
              <th>Дистанция</th>
              <th>Сумма взноса</th>
            </tr>
            {usersList.map(user => {
              return <UserItem user={user} key={user.id}/>
            })}
          </tbody>
        </table>
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