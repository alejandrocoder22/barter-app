
import { io } from 'socket.io-client'
import { useEffect, useState, useRef, useContext } from 'react'
import { getConversations, getMessages, getReceiverId } from '../services/chat'
import { AuthContext } from '../context/authContext'

const useChat = () => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [conversations, setConversations] = useState([])
  const [conversationId, setConversationId] = useState(null)
  const [receiverId, setReceiverId] = useState(null)
  const [arrivalMessage, setArrivalMessage] = useState(null)

  const URL = 'http://localhost:3009'

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

  return {
    handleMessage,
    setConversationId,
    conversations,
    setMessage,
    setMessages,
    receiverId,
    socket,
    message,
    messages,
    scrollRef,
    conversationId
  }
}

export default useChat
