import React from 'react'

function UserItem({user}) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  const dateReg = `${new Date(user.createDate).getDay()}.${monthNames[new Date(user.createDate).getMonth()]}.${new Date(user.createDate).getFullYear()}`

    return (
      <tr id={user.id} >
        <td>{user.fio}</td>
        <td>{dateReg}</td>
        <td>{user.email}</td>
        <td>{user.distance}</td>
        <td>{user.donations}</td>
      </tr>
    );
  }
  
  export default UserItem;