
const PrivateChat = () => {
  return (
    <section className='flex min-h-[calc(100vh-5rem)]'>
      <aside className='bg-gray-200 w-1/5'>
        <div className='h-full flex gap-2 mt-5 flex-col '>
          <div className='flex items-center justify-center gap-3 cursor-pointer'>
            <span className='font-bold'>Alvaro</span>
            <img className='h-9 rounded-full' src='https://picsum.photos/200' alt='' />
          </div>
        </div>

      </aside>
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
