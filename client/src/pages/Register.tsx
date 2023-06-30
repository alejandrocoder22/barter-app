import useForm from '../hooks/useForm'
import useAuth from '../hooks/useAuth'
import ResponsePopup from '../components/ResponsePopup'
import AuthField from '../components/AuthField'

const Register = () => {
  const { handleForm, form } = useForm()
  const { handleRegister, responseMessage, responseStatus } = useAuth({ userName: form.userName, password: form.password, email: form.email })

  return (
    <section className='flex flex-col  items-center justify-center min-h-[calc(100vh-4rem)]'>
      <ResponsePopup message={responseMessage} status={responseStatus} />
      <form onSubmit={handleRegister} className='flex flex-col max-w-xs gap-2'>
        <AuthField handleForm={handleForm} labelName='Username' inputName='userName' />
        <AuthField handleForm={handleForm} labelName='Email' inputName='email' />
        <AuthField handleForm={handleForm} labelName='Password' inputName='password' />
        <button className='text-white font-bold bg-blue-500 hover:bg-blue-400 mt-3 rounded-md p-2 color' type='submit'>Create account</button>
      </form>
    </section>
  )
}

export default Register
