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
    <div>ProductInfo</div>
  )
}

export default ProductInfo
