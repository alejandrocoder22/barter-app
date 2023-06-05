import { useState, useEffect } from 'react'
import Product from '../components/Product'
import CategoriesMenu from '../components/CategoriesMenu'

const Products = () => {
  const [products, setProducts] = useState([])
  const [lastId, setLastId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [category, setCategory] = useState('')

  useEffect(() => {
    category
      ? getProductsByCategory(category)
      : getAllProducts()
  }, [category])

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

  const getAllProducts = async () => {
    const petition = await fetch('/api/products')
    const allProducts = await petition.json()

    setProducts(allProducts)
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
      <CategoriesMenu setCategory={setCategory} category={category} />
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
