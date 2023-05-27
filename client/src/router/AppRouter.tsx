import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import AddProduct from '../pages/AddProduct'
import Products from '../pages/Products'
import Nav from '../components/Nav'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<AddProduct />} />
        <Route path='/products' element={<Products />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
