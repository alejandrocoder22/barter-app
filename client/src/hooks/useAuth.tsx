import { useState, useContext } from 'react'
import { handleLogin, loginUser } from '../services/auth'
import { AuthContext } from '../context/authContext'
const useAuth = ({ userName, password, email }) => {
  const [responseMessage, setResponseMessage] = useState('')
  const [responseStatus, setResponseStatus] = useState('')

  const { setUser } = useContext(AuthContext)

  const handleLogin = async (e, formData) => {
    e.preventDefault()

    const petition = await loginUser(formData.userName, formData.password)

    const response = await petition.json()

    if (!petition.ok) {
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

  const handleRegister = async (e) => {
    e.preventDefault()
    const petition = await fetch('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userName,
        password,
        email
      })
    })
    const response = await petition.json()

    setUser({ userName: response.userName })
  }

  return {
    responseMessage,
    responseStatus,
    setResponseMessage,
    setResponseStatus,
    handleLogin,
    handleRegister
  }
}

export default useAuth
