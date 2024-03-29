import Product from '../components/Product'
import CategoriesMenu from '../components/CategoriesMenu'
import { categories } from '../data/categories'
import useIsBottom from '../hooks/useIsBottom'
import useProducts from '../hooks/useProducts'

const Products = () => {
  const { containerRef, isVisible } = useIsBottom(
    {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
  )
  const { products, isLoading, setCategory } = useProducts(isVisible)

  return (
    <>
      <ul className='flex justify-center gap-2 mt-2 sm:overflow-x-scroll sm:justify-start'>
        {
      categories?.map((singleCategory) => {
        return <CategoriesMenu key={singleCategory.name} setCategory={setCategory} singleCategory={singleCategory} />
      })
    }
      </ul>

      <section className='grid grid-cols-4 auto-rows-max gap-10 max-w-screen-2xl m-auto 2xl:grid-cols-2 sm:grid-cols-1 '>

        {
                    products?.map(product => (
                      <Product key={product.id} product={product} />
                    ))
}
        {products.length === 0 && <p className='text-center '>There are not products</p>}
        {!isLoading && <div ref={containerRef} />}
      </section>

    </>
  )
}

export default Products
