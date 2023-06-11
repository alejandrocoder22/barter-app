
import { useContext } from 'react'

import { AuthContext } from '../context/authContext'

const Message = ({ message, scrollRef }) => {
  const authContext = useContext(AuthContext)

  return (
    <div className={`${authContext.user.userId === message?.senderId ? 'text-right bg-green-200 ml-auto' : 'text-left bg-blue-300 '} p-3 w-fit rounded-md m-2`} ref={scrollRef}>{message.text}</div>
  )
}

export default Message
