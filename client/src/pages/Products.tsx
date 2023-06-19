import { useState, useEffect } from 'react'
import Product from '../components/Product'
import CategoriesMenu from '../components/CategoriesMenu'
import { categories } from '../data/categories'
import useIsBottom from '../hooks/useIsBottom'
import { getAllProducts } from '../services/products'

const Products = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [_lastId, setLastId] = useState(null)
  const [isLastItem, setIsLastItem] = useState(false)

  const { containerRef, isVisible } = useIsBottom(
    {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
  )

  useEffect(() => {
    setLastId(null)
    setProducts([])
    getAllProducts(setProducts, setIsLastItem, setLastId, setIsLoading, category)
  }, [category])

  useEffect(() => {
    if (isVisible && !isLastItem) getAllProducts(setProducts, setIsLastItem, setLastId, setIsLoading, category)
  }, [isVisible])

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

        {
                    products?.map(product => (
                      <Product key={product.id} product={product} />
                    ))
}
        {!isLoading && <div ref={containerRef} />}
      </section>

    </>
  )
}

export default Products
