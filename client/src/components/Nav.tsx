import { Link, useLocation, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { logOutUser } from '../services/auth'
import { AiOutlineLogout } from 'react-icons/ai'
import logo from '../assets/images/logo.png'
import { PlusIcon } from './Icons'

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
    <nav className='flex justify-between items-center max-w-screen-2xl m-auto  p-2'>
      <Link to='/'>
        <img className='w-28' src={logo} />
      </Link>
      <ul className='flex gap-5 items-center'>
        {
          authContext?.user?.userName
            ? (
              <>
                <li className='flex bg-cyan-500 p-2 rounded-2xl gap-1 cursor-pointer'>
                  <Link to='/product' className={`${getClassNameOnCurrentPage('/product')} text-white p-[0.25rem] `}>Upload Product</Link>
                  <PlusIcon iconStyle='w-[1.5rem] ' />
                </li>
                {/* <li><Link to='/profile' className={getClassNameOnCurrentPage('/profile')}>Profile</Link></li>
                <li><Link to='/chat' className={getClassNameOnCurrentPage('/chat')}>Chat</Link></li>
                <li><Link to='/likes' className={getClassNameOnCurrentPage('/likes')}>Likes</Link></li>
                <li><Link to='/uploaded' className={getClassNameOnCurrentPage('/uploaded')}>My products</Link></li>
                */
            }
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
