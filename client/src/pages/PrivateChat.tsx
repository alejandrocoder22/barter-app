
const PrivateChat = () => {
  return (
    <section className='flex min-h-[calc(100vh-5rem)]'>
      <aside className='bg-gray-200 w-1/5'>All users</aside>
      <div className='bg-blue-200 flex flex-col justify-between w-full '>
        <div className='bg-orange-200  h-5/6'>Messages</div>
        <div className='h-1/6'>
          <input className='w-2/3 h-full' type='text' />
          <button className='bg-green-200 w-1/3  h-full'>Send Message</button>
        </div>
      </div>
    </section>
  )
}

export default PrivateChat
