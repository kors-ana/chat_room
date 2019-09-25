import React from 'react'

export default function Login({setUserName}) {

  const login = (e) => {
    e.preventDefault();
    setUserName(e.target.username.value);
  }

  return (
    <div id="gogin">
      <form onSubmit={login}>
        <label>Username:</label> 
        <br />
        <input type="text" id="username" />
        <input type="submit" value="Log in" />
      </form>
    </div>
  )
}
