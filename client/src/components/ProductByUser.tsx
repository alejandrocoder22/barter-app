
import { MdDelete, MdModeEditOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ProductByUser = ({ products, setProducts }) => {
  const onDeleteProduct = (productId) => {
    fetch(`/api/products/${productId}`, {
      method: 'DELETE'
    }).then(
      setProducts(products.filter(product => Number(product.id) !== Number(productId))

      )).catch((error) => console.log(error))
  }

  return (
    products?.map(product =>
      <div key={product.id} className=''>
        <img className='w-1/4' src={`http://localhost:3009/${product.imageUrl}`} alt='' />
        <div className=''>{product.description}</div>
        <div className='flex gap-3'>
          <MdDelete onClick={() => onDeleteProduct(product.id)} className='text-3xl cursor-pointer' />
          <Link to={`/update/${product.id}`}>
            <MdModeEditOutline className='text-3xl cursor-pointer' />
          </Link>
        </div>
      </div>
    )

  )
}

export default ProductByUser
