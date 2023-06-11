
import { useContext } from 'react'

import { AuthContext } from '../context/authContext'

const Message = ({ message, scrollRef }) => {
  const authContext = useContext(AuthContext)

  return (
    <div className={`${authContext?.user?.userId === message?.senderId ? 'text-right bg-green-300' : 'text-left bg-green-300'} p-2  bg-slate-200 rounded-md m-2`} ref={scrollRef}>{message.text}</div>
  )
}

export default Message
