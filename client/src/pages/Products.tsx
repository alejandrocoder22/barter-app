import { useState, useEffect } from 'react'
import Product from '../components/Product'
import CategoriesMenu from '../components/CategoriesMenu'

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
    const lastId = null
    getProductsByCategory()
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
      const petition = await fetch(`/api/products/category?categoryId=${category}&cursor=${lastId}`)
      const productsByCategory = await petition.json()
      setProductsByCategory(prev => [...prev, ...productsByCategory])
      lastId = productsByCategory[productsByCategory.length - 1].id
    } catch (error) {
      console.log(error)
    }
  }

  const isBottomReached = () => {
    const totalHeightscrolled = window.scrollY + document.documentElement.clientHeight
    const totalHeight = document.documentElement.scrollHeight
    if (totalHeightscrolled !== totalHeight) {
      return
    }
    getProductsByCategory()
  }

  useEffect(() => {
    window.addEventListener('scroll', isBottomReached)
    return () => window.removeEventListener('scroll', isBottomReached)
  }, [isLoading, category, lastId])

  return (
    <>
      <CategoriesMenu setCategory={setCategory} category={category} />
      <section className='grid grid-cols-3 gap-5 max-w-screen-2xl m-auto  p-2'>
        {productsToMap.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </section>
    </>
  )
}

export default Products
