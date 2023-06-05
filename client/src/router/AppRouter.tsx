import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import AddProduct from '../pages/AddProduct'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <header className='bg-slate-400'>
        <Nav />
      </header>
      <main className='bg-red-400 min-h-[calc(100vh-4rem)]'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<AddProduct />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
