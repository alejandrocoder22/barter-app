const ResponsePopup = ({ message, status }) => {
  return (
    <div className={`fixed right-5  top-12 bg-slate-800 p-5 rounded-md text-white font-bold ${status.ok ? 'bg-green-400' : 'bg-red-400'}`}>{message}</div>
  )
}

export default ResponsePopup
