import { useState, useEffect } from 'react'
import Product from '../components/Product'

const Products = () => {
  const [products, setProducts] = useState([])
  const [lastId, setLastId] = useState('')
  const [isLoading, setIsLoading] = useState(false)

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

      <section className='grid grid-cols-3 gap-5 max-w-screen-2xl m-auto  p-2'>
        {
        products.map(product => {
          return (
            <Product product={product} />
          )
        })
      }

      </section>
    </>
  )
}

export default Products
