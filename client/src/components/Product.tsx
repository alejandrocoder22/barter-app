
const Product = ({ product }) => {
  return (
    <div className='' key={product.id}>
      <img className='w-full' src={'http://localhost:3009/' + product.imageUrl} />
      <h2>{product.productName}</h2>
    </div>
  )
}

export default Product
