import React, { useState } from 'react'

export const AuthContext = React.createContext(null)

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ userName: '' })
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
