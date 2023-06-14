import { useState, useContext } from 'react'
import { loginUser } from '../services/auth'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
const useAuth = ({ userName, password, email }) => {
  const [responseMessage, setResponseMessage] = useState('')
  const [responseStatus, setResponseStatus] = useState('')

  const navigate = useNavigate()

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
      navigate('/')
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

    if (!petition.ok) {
      setResponseMessage(response)
      setResponseStatus(petition.ok)
      setTimeout(() => {
        setResponseStatus(false)
        setResponseMessage('')
      }, 2500)
    } else {
      setUser({ userName: response.userName, userId: response.id })
      navigate('/')
    }
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
