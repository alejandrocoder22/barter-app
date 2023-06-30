import { Link } from 'react-router-dom'
import ResponsePopup from '../components/ResponsePopup'
import useAuth from '../hooks/useAuth'
import useForm from '../hooks/useForm'
import AuthField from '../components/AuthField'
const Login = () => {
  const { handleForm, form } = useForm()
  const { handleLogin, responseMessage, responseStatus } = useAuth({ userName: form.userName, password: form.password })

  return (
    <section className='flex flex-col  items-center justify-center min-h-[calc(100vh-4rem)]'>
      <ResponsePopup message={responseMessage} status={responseStatus} />
      <form onSubmit={async (e) => await handleLogin(e, form)} className='flex flex-col max-w-xs gap-2'>
        <AuthField handleForm={handleForm} labelName='Username' inputName='userName' />
        <AuthField handleForm={handleForm} labelName='Password' inputName='password' inputType='password' />
        <p>Don't have an account?  <Link to='/register' className='text-blue-500'> Register here</Link></p>
        <button className='text-white font-bold bg-blue-500 hover:bg-blue-400  rounded-md p-2 mt-3' type='submit'>Login</button>
      </form>
    </section>
  )
}

export default Login
