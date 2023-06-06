import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div className=''>
      <Link to={`/product/${product.id}`}>
        <img className='w-full rounded-md' src={'http://localhost:3009/' + product.imageUrl} />
        <div className='flex gap-3 items-center '>
          <h2 className='capitalize text-xl font-bold '>{product.productName}</h2>
          <p className='capitalize'>{product.status}</p>
          <p className='capitalize'>{product.estimatedValue}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
