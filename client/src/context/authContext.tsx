import React, { useState } from 'react'

export const AuthContext = React.createContext(null)

const AuthContextProvider = ({ children }) => {
  const [user, setUSer] = useState({ userName: '' })
  return (
    <AuthContext.Provider value={{ user, setUSer }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
