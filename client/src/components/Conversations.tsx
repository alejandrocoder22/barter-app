import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/authContext'

interface Conver {
  id: number
  senderId: number
  receiverId: number
}

interface User {
  userName: string
  userId: number
}

interface IAuthContext {
  user: User
  setUser: React.SetStateAction<User>
}
const Conversations = ({ conver, setConversationId }: { conver: Conver, setConversationId: number }): React.ReactElement => {
  const authContext: IAuthContext | null = useContext(AuthContext)
  const [user, setUSer] = useState({})

  const getUserData = async (): Promise<void> => {
    if (authContext === null) return

    const remainingId: number = conver.receiverId === authContext.user.userId ? conver.senderId : conver.receiverId
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
