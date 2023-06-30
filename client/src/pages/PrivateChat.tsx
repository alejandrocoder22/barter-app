
import Conversations from '../components/Conversations'
import Message from '../components/Message'
import useChat from '../hooks/useChat'
import { handleSubmit } from '../services/chat'

const PrivateChat = () => {
  const {
    handleMessage,
    setConversationId,
    conversationId,
    conversations,
    setMessage,
    setMessages,
    receiverId,
    socket,
    message,
    messages,
    scrollRef
  } = useChat()

  return (
    <section className='flex min-h-[calc(100vh-5rem)]'>
      <aside className='bg-gray-200 w-1/5 rounded-md mb-2'>
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
        <form onSubmit={async (e) => await handleSubmit(e, conversationId, setMessage, setMessages, receiverId, message, messages, socket)} className='flex justify-between h-1/6'>
          <input className='w-2/3 bg-slate-200 p-5 m-2 rounded-md' value={message} type='text' onChange={handleMessage} />
          <button type='submit' className='bg-green-200 w-1/3 p-5 m-2 rounded-md '>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default PrivateChat
