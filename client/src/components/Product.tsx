
const Product = ({ product }) => {
  return (
    <div className=''>
      <img className='w-full rounded-md' src={'http://localhost:3009/' + product.imageUrl} />
      <div className='flex gap-3 items-center '>
        <h2 className='capitalize text-xl font-bold '>{product.productName}</h2>
        <p className='capitalize'>{product.status}</p>
        <p className='capitalize'>{product.estimatedValue}</p>
      </div>
    </div>
  )
}

export default Product
