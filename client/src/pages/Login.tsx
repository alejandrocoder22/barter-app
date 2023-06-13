import { useState } from 'react'

import { Link } from 'react-router-dom'
import ResponsePopup from '../components/ResponsePopup'
import useAuth from '../hooks/useAuth'
const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const { handleLogin, responseMessage, responseStatus } = useAuth({ userName, password })

  const onHandleUserName = (e: any) => setUserName(e.target.value)
  const onHandlePassword = (e: any) => setPassword(e.target.value)

  return (
    <section className='flex flex-col  items-center justify-center min-h-[calc(100vh-4rem)]'>
      <ResponsePopup message={responseMessage} status={responseStatus} />
      <form onSubmit={async (e) => await handleLogin(e, userName, password)} className='flex flex-col max-w-xs gap-2'>
        <label>Username</label>
        <input className='rounded-md p-1 border-2' onChange={onHandleUserName} type='text' name='username' />
        <label>Password</label>
        <input className='rounded-md p-1 border-2' onChange={onHandlePassword} type='text' name='password' />
        <p>Don't have an account?  <Link to='/register' className='text-blue-500'> Register here</Link></p>
        <button className='text-white font-bold bg-blue-500 hover:bg-blue-400  rounded-md p-2 mt-3' type='submit'>Login</button>
      </form>
    </section>
  )
}

export default Login
