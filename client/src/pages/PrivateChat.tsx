import { io } from 'socket.io-client'
import { useEffect, useState } from 'react'
import Conversations from '../components/Conversations'

const URL = 'http://localhost:3009'

const PrivateChat = () => {
  const [message, setMessage] = useState('')
  const [_messages, setMessages] = useState([])
  const [conversations, setConversations] = useState([])

  const getConversations = async () => {
    const petition = await fetch('/api/chat')
    const data = await petition.json()
    setConversations(data)
  }

  const getMessages = async () => {
    const petition = await fetch(`/api/chat/message${conversations.id} `)
    const data = await petition.json()
    setMessages(data)
  }

  useEffect(() => {
    getConversations()
  }, [])

  useEffect(() => {
    getMessages()
  }, [conversations])

  const handleMessage = (e) => setMessage(e.target.value)

  const socket = io(URL, { withCredentials: true })

  useEffect(() => {
    socket.on('getUsers', (users) => {
      console.log(users)
    })

    socket.on('getMessage', (data) => {
      console.log(data)
    })
  }, [])

  const handleSubmit = () => {
    socket.emit('sendMessage', { recieverId: 1, text: message })
  }

  return (
    <section className='flex min-h-[calc(100vh-5rem)]'>
      <aside className='bg-gray-200 w-1/5'>
        <div className='h-full flex gap-2 mt-5 flex-col '>
          <Conversations conversations={conversations} />
        </div>

      </aside>
      <div className='bg-blue-200 flex flex-col justify-between w-full '>
        <div className='bg-orange-200  h-5/6'>Messages</div>
        <div className='h-1/6'>
          <input className='w-2/3 h-full' type='text' onChange={handleMessage} />
          <button onClick={handleSubmit} className='bg-green-200 w-1/3  h-full'>Send Message</button>
        </div>
      </div>
    </section>
  )
}

export default PrivateChat
