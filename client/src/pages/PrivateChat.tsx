import { io } from 'socket.io-client'
import { useEffect, useState, useRef, useContext } from 'react'
import Conversations from '../components/Conversations'
import Message from '../components/Message'
import { AuthContext } from '../context/authContext'
import { getConversations, getMessages, getReceiverId, handleSubmit } from '../services/chat'

const URL = 'http://localhost:3009'

const PrivateChat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [conversations, setConversations] = useState([])
  const [conversationId, setConversationId] = useState(null)
  const [receiverId, setReceiverId] = useState(null)
  const [arrivalMessage, setArrivalMessage] = useState(null)

  const authContext = useContext(AuthContext)

  const scrollRef = useRef()

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    getConversations(setConversations)
  }, [])

  useEffect(() => {
    getMessages(conversationId, setMessages)
    getReceiverId(conversationId, authContext, setReceiverId)
  }, [conversationId])

  useEffect(() => {
    arrivalMessage && setMessages(prev => [...prev, arrivalMessage])
  }, [arrivalMessage])

  useEffect(() => {
    socket.on('getUsers', (_users) => {
      // console.log(users)
    })

    socket.on('getMessage', (data) => {
      setArrivalMessage({
        userId: data.userId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  }, [])

  const handleMessage = (e) => setMessage(e.target.value)

  const socket = io(URL, { withCredentials: true })

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
      <div className='flex flex-col justify-between max-h-[calc(100vh-5rem)] w-full  '>
        <div className='h-5/6 block w-full overflow-auto'>

          {
          messages.map(message => {
            return <Message key={message.id} message={message} scrollRef={scrollRef} />
          })
        }
        </div>
        <div className='flex justify-between h-1/6'>

          <input className='w-2/3 bg-slate-200 p-5 m-2 rounded-md' value={message} type='text' onChange={handleMessage} />
          <button onClick={async () => await handleSubmit(conversationId, setMessage, setMessages, receiverId, message, messages, socket)} className='bg-green-200 w-1/3 p-5 m-2 rounded-md '>Send Message</button>
        </div>
      </div>
    </section>
  )
}

export default PrivateChat
