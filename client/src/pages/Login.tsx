import { useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault()
    fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName,
        password
      })
    }).then(async res => await res.json()).then(data => {
      setUser({ userName: data.userName })
    })
  }

  const onHandleUserName = (e: any) => setUserName(e.target.value)
  const onHandlePassword = (e: any) => setPassword(e.target.value)

  return (
    <section className='flex flex-col  items-center justify-center min-h-[calc(100vh-4rem)]'>
      <h1 className='mb-5 text-3xl'>Login</h1>
      <form onSubmit={handleLogin} className='flex flex-col max-w-xs gap-4'>
        <input className='rounded-md p-1' onChange={onHandleUserName} type='text' name='username' />
        <input className='rounded-md p-1' onChange={onHandlePassword} type='text' name='password' />
        <button className='bg-blue-500 hover:bg-blue-400  rounded-md p-1' type='submit'>Login</button>

      </form>
    </section>
  )
}

export default Login
