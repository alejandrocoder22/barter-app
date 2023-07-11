
import { MdDelete, MdModeEditOutline } from 'react-icons/md'

const ProductByUser = ({ products }) => {
  return (
    products.map(product =>
      <div key={product.id} className=''>
        <img className='w-1/4' src={`http://localhost:3009/${product.imageUrl}`} alt='' />
        <div className=''>{product.description}</div>
        <div className='flex gap-3'>
          <MdDelete className='text-3xl cursor-pointer' />
          <MdModeEditOutline className='text-3xl cursor-pointer' />
        </div>
      </div>
    )

  )
}

export default ProductByUser
