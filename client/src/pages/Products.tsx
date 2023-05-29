import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Product from '../components/Product'

const Products = () => {
  const [products, setProducts] = useState([])
  const [lastId, setLastId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [totalElements, setTotalElements] = useState(false)

  useEffect(() => {
    getProductsByCategory('car')
  }, [])

  const getProductsByCategory = async (category: string) => {
    try {
      setIsLoading(true)

      const petition = await fetch(`/api/products/category?categoryId=${category}&cursor=${lastId}`)
      const data = await petition.json()

      setLastId(data[data.length - 1].id)
      setProducts(prev => [...prev, ...data])
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return
    }
    getProductsByCategory('car')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLoading])

  return (

    <>

      <main className='grid grid-cols-3 gap-5 max-w-screen-2xl m-auto mt-5 p-2'>
        {
        products.map(product => {
          return (
          <Product product={product} />
          )
        })
      }

      </main>
    </>
  )
}

export default Products
