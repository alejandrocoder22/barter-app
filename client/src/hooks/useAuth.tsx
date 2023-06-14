import { useState, useContext } from 'react'
import { handleLogin, loginUser } from '../services/auth'
import { AuthContext } from '../context/authContext'
const useAuth = ({ userName, password }) => {
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

  return {
    responseMessage,
    responseStatus,
    setResponseMessage,
    setResponseStatus,
    handleLogin
  }
}

export default useAuth
