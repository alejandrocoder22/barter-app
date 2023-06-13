export const handleLogin = async (e, userName, password, setResponseMessage, setResponseStatus, setUser) => {
  e.preventDefault()
  const petition = await fetch('/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userName,
      password
    })
  })

  const response = await petition.json()

  if (!petition.ok) {
    console.log('hjofee')
    setResponseMessage(response)
    setResponseStatus(petition.ok)
    setTimeout(() => {
      setResponseStatus(false)
      setResponseMessage('')
    }, 2500)
  } else {
    setUser({ userName: response.userName, userId: response.id })
  }
}
