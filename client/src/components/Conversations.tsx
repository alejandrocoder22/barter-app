import { useEffect, useState } from 'react'

const Conversations = ({ conver, setConversationId }) => {
  const [user, setUSer] = useState({})

  const getUserData = async () => {
    const petition = await fetch(`/api/users/${conver.receiverId}`)
    const data = await petition.json()
    setUSer(data)
  }

  useEffect(() => {
    getUserData()
  }, [])
  return (
    <div onClick={() => setConversationId(conver.id)} className='flex items-center justify-center gap-3 cursor-pointer'>
      <span className='font-bold'>{user.userName}</span>
      <img className='h-9 rounded-full' src='https://picsum.photos/200' alt='' />
    </div>
  )
}

export default Conversations
