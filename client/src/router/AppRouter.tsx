import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import AddProduct from '../pages/AddProduct'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Register from '../pages/Register'
import ProductInfo from '../pages/ProductInfo'
import PrivateChat from '../pages/PrivateChat'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <header className='bg-slate-400'>
        <Nav />
      </header>
      <main className='min-h-[calc(100vh-4rem)]'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:productId' element={<ProductInfo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat' element={<PrivateChat />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product' element={<AddProduct />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
