import { Link, useLocation } from 'react-router-dom'
const Nav = () => {
  const location = useLocation()

  const getClassNameOnCurrentPage = (pathName: string) => {
    if (location.pathname === pathName) {
      return 'text-lime-500'
    }
  }
  return (
    <nav className='flex justify-between max-w-screen-2xl m-auto  p-2'>
      <div className='logo'><Link to='/'>Logo</Link></div>
      <ul className='flex gap-3'>
        <li><Link to='/products' className={getClassNameOnCurrentPage('/products')}>Products</Link></li>
        <li><Link to='/product' className={getClassNameOnCurrentPage('/product')}>Add Product</Link></li>
        <li><Link to='/profile' className={getClassNameOnCurrentPage('/profile')}>Profile</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
