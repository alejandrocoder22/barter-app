import { io } from 'socket.io-client'
import { useEffect, useState } from 'react'
import Conversations from '../components/Conversations'
import Message from '../components/Message'

const URL = 'http://localhost:3009'

const PrivateChat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [conversations, setConversations] = useState([])
  const [conversationId, setConversationId] = useState(null)

  const getConversations = async () => {
    const petition = await fetch('/api/chat')
    const data = await petition.json()
    setConversations(data)
  }

  const getMessages = async () => {
    const petition = await fetch(`/api/chat/message/${conversationId} `)
    const data = await petition.json()
    setMessages(data)
  }

  useEffect(() => {
    getConversations()
  }, [])

  useEffect(() => {
    getMessages()
  }, [conversationId])

  const handleMessage = (e) => setMessage(e.target.value)

  const socket = io(URL, { withCredentials: true })

  useEffect(() => {
    socket.on('getUsers', (users) => {
      console.log('Users')
    })

    socket.on('getMessage', (data) => {
      console.log('MEssage')
    })
  }, [])

  const handleSubmit = () => {
    socket.emit('sendMessage', { recieverId: 1, text: message })
  }

  return (
    <section className='flex min-h-[calc(100vh-5rem)]'>
      <aside className='bg-gray-200 w-1/5'>
        <div className='h-full flex gap-2 mt-5 flex-col '>
          {
            conversations.map(conver => {
              return <Conversations key={conver.id} setConversationId={setConversationId} conver={conver} />
            })
          }
        </div>

      </aside>
      <div className='flex flex-col justify-between w-full '>
        {
          messages.map(message => {
            return <Message key={message.id} message={message} />
          })
        }
        <div className='h-1/6'>
          <input className='w-2/3 h-full' type='text' onChange={handleMessage} />
          <button onClick={handleSubmit} className='bg-green-200 w-1/3  h-full'>Send Message</button>
        </div>
      </div>
    </section>
  )
}

export default PrivateChat
