import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { getProductsLiked } from '../services/products'
import { IProduct } from '../types'

const LikedProducts: React.FC = () => {
  const [likedProducts, setLikedProducts] = useState<IProduct[] | []>([])

  useEffect(() => {
    getProductsLiked(setLikedProducts)
      .catch(error => console.log(error))
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
