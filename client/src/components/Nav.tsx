import { Link, useLocation, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { logOutUser } from '../services/auth'
import { AiOutlineLogout } from 'react-icons/ai'

const Nav = (): React.ReactNode => {
  const location = useLocation()
  const navigate = useNavigate()

  const authContext = useContext(AuthContext)
  const getClassNameOnCurrentPage = (pathName: string) => {
    if (location.pathname === pathName) {
      return 'text-lime-500'
    }
  }
  return (
    <nav className='flex justify-between max-w-screen-2xl m-auto  p-2'>
      <div className='logo'><Link to='/'>Logo</Link></div>
      <ul className='flex gap-5'>
        <li><Link to='/' className={getClassNameOnCurrentPage('/')}>Products</Link></li>

        {
          authContext?.user?.userName
            ? (
              <>
                <li><Link to='/product' className={getClassNameOnCurrentPage('/product')}>Add Product</Link></li>
                <li><Link to='/profile' className={getClassNameOnCurrentPage('/profile')}>Profile</Link></li>
                <li><Link to='/chat' className={getClassNameOnCurrentPage('/chat')}>Chat</Link></li>
                <li><Link to='/likes' className={getClassNameOnCurrentPage('/likes')}>Likes</Link></li>
                <li className='capitalize font-bold'>{authContext.user?.userName}</li>
                <li className='flex items-center cursor-pointer' onClick={() => logOutUser(authContext.setUser, navigate)}><AiOutlineLogout className='text-lg' /></li>
              </>

              )
            : <>
              <li><Link to='/login' className={getClassNameOnCurrentPage('/login')}>Login</Link></li>
              <li><Link to='/register' className={getClassNameOnCurrentPage('/register')}>Register</Link></li>
              </>
        }

      </ul>
    </nav>
  )
}

export default Nav
