import { useEffect, useState } from 'react'
import Product from '../components/Product'

const LikedProducts = () => {
  const [likedProducts, setLikedProducts] = useState([])
  const getProductsLiked = async () => {
    const petition = await fetch('/api/products/likedProducts')
    const response = await petition.json()

    setLikedProducts(response)
  }

  useEffect(() => {
    getProductsLiked()
  }, [])
  return (
    <>
      <section className='grid grid-cols-3 gap-5 max-w-screen-2xl m-auto  p-2'>
        {likedProducts?.map(product => (
          <Product key={product.id} product={product.product} />
        ))}
      </section>
    </>
  )
}

export default LikedProducts
