import React, { useContext, useEffect, useState } from 'react'
import { IProduct } from '../types'
import { getProductsByUserId } from '../services/products'
import { AuthContext } from '../context/authContext'

const UploadedProducts: React.FC = () => {
  const [products, setProducts] = useState<IProduct[] | []>([])

  const authContext = useContext(AuthContext)

  console.log()

  useEffect(() => {
    getProductsByUserId(authContext?.user.userId, setProducts)
  }, [])

  return (
    <section>
        
    </section>
  )
}

export default UploadedProducts
