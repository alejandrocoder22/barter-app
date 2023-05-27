import AuthContextProvider from './context/authContext'
import AppRouter from './router/AppRouter'

function App () {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  )
}

export default App
