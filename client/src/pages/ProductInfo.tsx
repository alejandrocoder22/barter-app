import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductInfo = ({}) => {
  const [product, setProduct] = useState([])

  const { productId } = useParams()

  console.log(productId)
  const getProductById = async () => {
    const petition = await fetch(`/api/products/singleProduct/${productId}`)
    const singleProduct = await petition.json()

    setProduct(singleProduct)
  }

  useEffect(() => {
    getProductById()
  }, [])
  return (
    <section className='flex gap-5 items-center'>
      <div className=''>
        <h1 className='text-4xl font-bold mb-5 '>{product?.productName}</h1>
        <p>{product?.status}</p>
        <p>{product?.estimatedValue}</p>
        <img className='max-w-3xl rounded-2xl' src={`http://localhost:3009/${product?.imageUrl}`} />
      </div>
      <div className=''>
        <button className='text-white font-bold bg-lime-500 p-2 rounded-md'>Send Message</button>
      </div>
    </section>
  )
}

export default ProductInfo
