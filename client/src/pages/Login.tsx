import React, { useState } from "react"

const Login = () => {


  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('/api/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userName,
        password
      })
    })
  }


  const onHandleUserName = (e: any) => setUserName(e.target.value)
  const onHandlePassword = (e: any) => setPassword(e.target.value)
  
  return (
    <main>
    <h1>Login</h1>
    <form onSubmit={handleLogin} className="flex flex-col max-w-xs gap-2">
      <input onChange={onHandleUserName} className="border-2" type='text' name="username"></input>
      <input onChange={onHandlePassword} className="border-2" type='text' name="password"></input>
      <button type="submit">Login</button>
    </form>
    </main>
  )
}

export default Login