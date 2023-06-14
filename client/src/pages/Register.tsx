import useForm from '../hooks/useForm'
import useAuth from '../hooks/useAuth'

const Register = () => {
  const { handleForm, form } = useForm()
  const { handleRegister } = useAuth({ userName: form.userName, password: form.password, email: form.email })

  return (
    <section className='flex flex-col  items-center justify-center min-h-[calc(100vh-4rem)]'>
      <form onSubmit={handleRegister} className='flex flex-col max-w-xs gap-2'>
        <label>Email</label>
        <input className='rounded-md p-1 border-2' onChange={handleForm} type='text' name='email' />
        <label>Username</label>
        <input className='rounded-md p-1 border-2' onChange={handleForm} type='text' name='userName' />
        <label>Password</label>
        <input className='rounded-md p-1 border-2' onChange={handleForm} type='password' name='password' />
        <button className='text-white font-bold bg-blue-500 hover:bg-blue-400 mt-3 rounded-md p-2 color' type='submit'>Login</button>
      </form>
    </section>
  )
}

export default Register
