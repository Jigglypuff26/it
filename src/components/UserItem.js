import React from 'react'

function UserItem({user}) {
    return (
      <tr>
        <td>ФИО</td>
        <td>Дата создания заявки</td>
        <td>Дистанция</td>
        <td>Сумма взноса</td>
      </tr>
    );
  }
  
  export default UserItem;