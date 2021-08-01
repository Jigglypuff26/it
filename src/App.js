import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useRouter from './router/router'
import { users } from './json/Users.json'

function App() {
  const router = useRouter(!!useSelector(state => state.profileReduser.profile))

  useEffect(() => {
    // Записываем в storege здесь, т.к. нет сервера для сохранения данных
    const data = JSON.parse(localStorage.getItem('users'))
    if(!data){
      localStorage.setItem('users', JSON.stringify({
        usersList: [...users]
      }))
    }
  },[])
  
  return (
    <Router>
      {router}
    </Router>
  );
}

export default App;
