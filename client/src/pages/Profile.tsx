import { RiUploadCloudFill } from 'react-icons/ri'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'
import useForm from '../hooks/useForm'
import { updateUserInfo } from '../services/auth'
import { getUserInfo, uploadProfileImage } from '../services/users'

const Profile = () => {
  const authContext = useContext(AuthContext)

  const [user, setUser] = useState(null)

  const { handleForm, form } = useForm()

  useEffect(() => {
    getUserInfo(setUser)
  }, [authContext])

  return (
    <section className='flex flex-col items-center gap-5 mt-5 min-h-[calc(100vh-5rem)] '>
      <div className='relative bg-slate-500 h-80 w-80 rounded-full'>
        <img src={`http://localhost:3009/${user?.profileImg}`} className='w-full h-full object-cover rounded-full ' />
        <input className='hidden' onChange={uploadProfileImage} type='file' id='file' name='file' />
        <label htmlFor='file' id='file'>
          <RiUploadCloudFill className='absolute bottom-5 right-12 block h-10 w-10 cursor-pointer text-gray-200' />
        </label>
      </div>
      <form className='flex flex-col gap-1 bg-' onSubmit={async (e) => await updateUserInfo(e, form)}>
        <label>Username</label>
        <input onChange={handleForm} className='bg-slate-100' required type='text' name='userName' />
        <label>Email</label>
        <input onChange={handleForm} className='bg-slate-100' required type='text' name='email' />
        <label>Password</label>
        <input onChange={handleForm} className='bg-slate-100' required type='password' name='password' />
        <button className='bg-orange-300 mt-4 p-2 cursor-pointer rounded-md'>Update</button>
      </form>
    </section>
  )
}

export default Profile
