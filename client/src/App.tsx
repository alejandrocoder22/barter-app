import { useEffect, useContext } from 'react'
import { AuthContext } from './context/authContext'
import AppRouter from './router/AppRouter'

function App () {
  const authContext = useContext(AuthContext)

  const verifyUser = async () => {
    const petition = await fetch('/api/users/verify')
    const data = await petition.json()
    authContext.setUser({
      userName: data.userData.userName,
      userId: data.userData.userId
    })
  }

  useEffect(() => {
    verifyUser()
  }, [])

  return (
    <AppRouter />
  )
}

export default App
