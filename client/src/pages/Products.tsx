import { useState, useEffect } from 'react'
import Product from '../components/Product'
import CategoriesMenu from '../components/CategoriesMenu'
import { categories } from '../data/categories'

const Products = () => {
  const [products, setProducts] = useState([])
  const [productsByCategory, setProductsByCategory] = useState([])
  const [category, setCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const productsToMap = category === null || category === 'all' ? products : productsByCategory

  useEffect(() => {
    getAllProducts()
  }, [])

  let lastId = null

  useEffect(() => {
    setProductsByCategory([])

    getProductsByCategory()

    const lastId = null
  }, [category])

  const getAllProducts = async () => {
    try {
      setIsLoading(true)
      const petition = await fetch('/api/products')
      const allProducts = await petition.json()
      setProducts(allProducts)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getProductsByCategory = async () => {
    try {
      setIsLoading(true)
      const petition = await fetch(`/api/products/category?categoryId=${category}&cursor=${lastId}`)
      const productsByCategory = await petition.json()
      setProductsByCategory(prev => [...prev, ...productsByCategory])
      lastId = productsByCategory[productsByCategory.length - 1].id
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const isBottomReached = () => {
    const totalHeightscrolled = window.scrollY + document.documentElement.clientHeight
    const totalHeight = document.documentElement.scrollHeight
    if (totalHeightscrolled === totalHeight && category !== 'all') {
      getProductsByCategory()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', isBottomReached)
    return () => window.removeEventListener('scroll', isBottomReached)
  }, [category, lastId])

  return (
    <>
      <ul className='flex justify-center gap-2 mt-2'>
        {
      categories?.map((singleCategory) => {
        return <CategoriesMenu key={singleCategory.name} setCategory={setCategory} singleCategory={singleCategory} />
      })
    }
      </ul>

      <section className='grid grid-cols-3 gap-5 max-w-screen-2xl m-auto  p-2'>
        {productsToMap.length > 0
          ? (
              productsToMap?.map(product => (
                <Product key={product.id} product={product} />
              ))
            )
          : (
            <p className='text-center w-full'>No products</p>
            )}

        {isLoading && <p className='text-center w-full'>Loading...</p>}
      </section>
    </>
  )
}

export default Products
