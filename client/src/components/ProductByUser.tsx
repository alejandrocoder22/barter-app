
const ProductByUser = ({ products }) => {
  return (
    products.map(product =>
      <div key={product.id} className=''>
        <img src={`http://localhost:3009/${product.imageUrl}`} alt='' />
        <div className=''>{product.description}</div>
      </div>
    )

  )
}

export default ProductByUser
