import { Link, useLocation } from 'react-router-dom'
const Nav = () => {
  const location = useLocation()

  const getClassNameOnCurrentPage = (pathName: string) => {
    if (location.pathname === pathName) {
      return 'text-lime-500'
    }
  }
  return (
    <nav className='flex justify-between max-w-screen-2xl m-auto bg-slate-400 p-2'>
      <div className='logo'>Logo</div>
      <ul className='flex gap-3'>
        <li><Link to='/' className={getClassNameOnCurrentPage('/')}>Home</Link></li>
        <li><Link to='/products' className={getClassNameOnCurrentPage('/products')}>Products</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
