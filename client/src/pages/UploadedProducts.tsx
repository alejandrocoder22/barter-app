import React, { useContext, useEffect, useState } from 'react'
import { IProduct } from '../types'
import { getProductsByUserId } from '../services/products'
import { AuthContext } from '../context/authContext'
import ProductByUser from '../components/ProductByUser'

const UploadedProducts: React.FC = () => {
  const [products, setProducts] = useState<IProduct[] | []>([])

  const authContext = useContext(AuthContext)

  useEffect(() => {
    getProductsByUserId(authContext?.user.userId, setProducts)
  }, [authContext])

  return (
    <section>
      <ProductByUser products={products} setProducts={setProducts} />
    </section>
  )
}

export default UploadedProducts
