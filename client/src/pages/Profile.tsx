import { RiUploadCloudFill } from 'react-icons/ri'
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Profile = () => {
  const authContext = useContext(AuthContext)

  const [user, setUser] = useState(null)

  const getUserInfo = async () => {
    const petition = await fetch(`/api/users/${authContext.user.userId}`)
    const response = await petition.json()

    setUser(response)
  }

  const uploadImage = (e: any) => {
    const formData = new FormData()

    console.log(e.target.files[0])

    formData.append('profileImage', e.target.files[0])

    fetch('/api/users/image', {
      method: 'POST',
      body: formData
    })
  }

  useEffect(() => {
    getUserInfo()
  }, [authContext])

  return (
    <section className='flex min-h-[calc(100vh-5rem)]'>
      <div className='relative bg-slate-500 h-80 w-80 rounded-full'>
        <img src={`http://localhost:3009/${user?.profileImg}`} className='w-full h-full object-cover rounded-full ' />
        <input className='hidden' onChange={uploadImage} type='file' id='file' name='file' />
        <label htmlFor='file' id='file'>
          <RiUploadCloudFill className='absolute bottom-5 right-12 block h-10 w-10 cursor-pointer text-gray-200' />
        </label>
      </div>
    </section>
  )
}

export default Profile
