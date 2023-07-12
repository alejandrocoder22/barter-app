
import { MdDelete, MdModeEditOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ProductByUser = ({ products }) => {
  return (
    products.map(product =>
      <div key={product.id} className=''>
        <img className='w-1/4' src={`http://localhost:3009/${product.imageUrl}`} alt='' />
        <div className=''>{product.description}</div>
        <div className='flex gap-3'>
          <MdDelete className='text-3xl cursor-pointer' />
          <Link to='/update'>
            <MdModeEditOutline className='text-3xl cursor-pointer' />
          </Link>
        </div>
      </div>
    )

  )
}

export default ProductByUser
