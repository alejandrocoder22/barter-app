import { Link } from 'react-router-dom'
import { BlackHearthIcon } from './Icons'

const Product = ({ product }) => {
  return (
    <div className='mt-6'>
      <Link to={`/product/${product.id}`}>
        <img className=' h-[267px] w-full rounded-[50px] object-cover' src={'http://localhost:3009/' + product.imageUrl} />
        <div className='flex gap-3 items-center justify-between '>
          <h2 className='capitalize font-bold  mt-2 text-[1rem]'>{product.productName}</h2>
          <div className='flex gap-3'>
            <p className='capitalize text-[0.875rem]'>{product.estimatedValue}$</p>
            <BlackHearthIcon />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product
