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
import LikedProducts from '../pages/LikedProducts'
import UploadedProducts from '../pages/UploadedProducts'
import UpdatedProduct from '../pages/UpdateProduct'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <header className='mt-7'>
        <Nav />
      </header>
      <main className='min-h-[calc(100vh-4rem)] max-w-screen-2xl m-auto p-2'>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/product/:productId' element={<ProductInfo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat' element={<PrivateChat />} />
          <Route path='/register' element={<Register />} />
          <Route path='/product' element={<AddProduct />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/likes' element={<LikedProducts />} />
          <Route path='/uploaded' element={<UploadedProducts />} />
          <Route path='/update/:productId' element={<UpdatedProduct />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter
