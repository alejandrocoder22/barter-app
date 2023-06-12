const ResponsePopup = ({ message, status }) => {
  return (
    <div className={`after:content-[''] after:absolute after:bottom-0 after:right-0 after:h-3 after:w-full fixed right-5 top-12  p-5 rounded-md text-white font-bold ${status.ok ? 'bg-green-400' : 'bg-red-400'}`}>
      {message}
    </div>
  )
}

export default ResponsePopup
