import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useRouter from './router/router'

function App() {
  const router = useRouter(!!useSelector(state => state.profileReduser.profile))
  
  return (
    <Router>
      {router}
    </Router>
  );
}

export default App;
