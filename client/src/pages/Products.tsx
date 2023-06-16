import { useState, useEffect } from 'react'
import Product from '../components/Product'
import CategoriesMenu from '../components/CategoriesMenu'
import { categories } from '../data/categories'
import useIsBottom from '../hooks/useIsBottom'

const Products = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [lastId, setLastId] = useState(null)
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
    getAllProducts()
  }, [category])

  const getAllProducts = () => {
    setLastId((lastValue) => {
      setIsLoading(true)
      fetch(`/api/products?categoryId=${category}&cursor=${lastValue}`)
        .then(async response => await response.json())
        .then(data => {
          setProducts(prev => [...prev, ...data.products])
          setIsLastItem(data.isLastItem)
          if (data.products.length === 0) {
            setLastId(lastValue)
          } else {
            setLastId(data.products[data.products.length - 1].id)
          }
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    })
  }

  useEffect(() => {
    if (isVisible && !isLastItem) getAllProducts()
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
