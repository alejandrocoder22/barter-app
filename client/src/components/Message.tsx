
import { useContext } from 'react'

import { AuthContext } from '../context/authContext'

const Message = ({ message }) => {
  const authContext = useContext(AuthContext)

  console.log(authContext)
  return (
    <div className={`${authContext?.user?.userId === message?.senderId ? 'text-right' : 'text-left'} p-5 bg-slate-200 rounded-md m-5`}>{message.text}</div>
  )
}

export default Message
