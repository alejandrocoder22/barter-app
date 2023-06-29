
export const getReceiverId = async (conversationId: number, authContext: any, setReceiverId: any) => {
  const petition = await fetch(`/api/chat/${conversationId}`)
  const conversationUsers = await petition.json()
  const receiverId = conversationUsers.receiverId === authContext.user.userId ? conversationUsers.senderId : conversationUsers.receiverId
  setReceiverId(receiverId)
}

export const getMessages = async (conversationId, setMessages) => {
  const petition = await fetch(`/api/chat/message/${conversationId} `)
  const data = await petition.json()
  setMessages(data)
}

export const getConversations = async (setConversations) => {
  const petition = await fetch('/api/chat')
  const data = await petition.json()
  setConversations(data)
}

export const handleSubmit = async (e, conversationId, setMessage, setMessages, receiverId, message, messages, socket) => {
  e.preventDefault()
  const petition = await fetch('/api/chat/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: message,
      conversationId
    })
  })
  const newMessage = await petition.json()
  setMessage('')
  setMessages([...messages, newMessage])
  socket.emit('sendMessage', { receiverId, text: message })
}

export const createConversation = async (product, navigate) => {
  try {
    const petition = await fetch('/api/chat',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ receiverId: product.userId })
      })
  } catch (error) {
    console.log(error)
  } finally {
    if (petition.ok) {
      navigate('/chat')
    }
  }
}
