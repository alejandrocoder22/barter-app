
const Product = ({ product }) => {
  return (
    <div className=''>
      <img className='w-full rounded-md' src={'http://localhost:3009/' + product.imageUrl} />
      <h2 className='capitalize'>{product.productName}</h2>
    </div>
  )
}

export default Product
