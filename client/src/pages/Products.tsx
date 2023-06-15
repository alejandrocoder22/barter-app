import { useState, useEffect } from 'react'
import Product from '../components/Product'
import CategoriesMenu from '../components/CategoriesMenu'
import { categories } from '../data/categories'
import useIsBottom from '../hooks/useIsBottom'

const Products = () => {
  const [products, setProducts] = useState([])
  const [productsByCategory, setProductsByCategory] = useState([])
  const [category, setCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [lastId, setLastId] = useState(null)

  const productsToMap = category === null || category === 'all' ? products : productsByCategory

  const { currentRef, isBottom } = useIsBottom()

  useEffect(() => {
    getAllProducts()
  }, [])

  useEffect(() => {
    setProductsByCategory([])
    getProductsByCategory()
  }, [category])

  const getProductsByCategory = async () => {
    try {
      setIsLoading(true)
      const petition = await fetch(`/api/products/category?categoryId=${category}&cursor=${lastId}`)
      const productsByCategory = await petition.json()
      setLastId(productsByCategory[productsByCategory.length - 1].id)
      setProductsByCategory(prev => [...prev, ...productsByCategory])
      console.log(lastId)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

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

  useEffect(() => {
    if (isBottom) getProductsByCategory()
  }, [isBottom])

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
      <div ref={currentRef} />
    </>
  )
}

export default Products
