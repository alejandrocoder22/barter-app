import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Conversations = ({ conver, setConversationId }) => {
  const authContext = useContext(AuthContext)
  const [user, setUSer] = useState({})

  const getUserData = async (): Promise<void> => {
    const remainingId: number = conver.receiverId === authContext?.user?.userId ? conver.senderId : conver.receiverId
    const petition = await fetch(`/api/users/${remainingId}`)
    const data = await petition.json()
    setUSer(data)
  }

  useEffect(() => {
    getUserData()
      .catch(error => console.log(error))
  }, [])
  return (
    <div onClick={() => setConversationId(conver.id)} className='flex items-center justify-center gap-3 cursor-pointer'>
      <span className='font-bold'>{user.userName}</span>
      <img className='h-9 rounded-full' src='https://picsum.photos/200' alt='' />
    </div>
  )
}

export default Conversations
