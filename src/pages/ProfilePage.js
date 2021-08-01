import React from 'react';
import { useLogin } from '../hooks/useLogin';

function ProfilePage() {

  const {logOut} = useLogin()

  return (
    <div className="container">
      <h1>ProfilePage</h1>
      <button className="btn" id="btn" onClick={logOut}>Выйти</button>
    </div>
  );
}

export default ProfilePage;