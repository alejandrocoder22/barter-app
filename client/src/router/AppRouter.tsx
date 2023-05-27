import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import AddProduct from '../pages/AddProduct'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Nav from '../components/Nav'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <header className='bg-slate-400'>
        <Nav />
      </header>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<AddProduct />} />
        <Route path='/products' element={<Products />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
