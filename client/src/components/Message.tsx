
import { useContext } from 'react'

import { AuthContext } from '../context/authContext'

const Message = ({ message, scrollRef }) => {
  const authContext = useContext(AuthContext)

  return (
    <div className={`${authContext?.user?.userId === message?.senderId ? 'text-right' : 'text-left'} p-5 bg-slate-200 rounded-md m-5`} ref={scrollRef}>{message.text}</div>
  )
}

export default Message
