import { useState, useEffect } from 'react'

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
    <div className=''>
      {
        products.map(product => {
          return (
            <div className='' key={product.id}>
              <h2>{product.productName}</h2>
              <img className='max-w-xs' src={'http://localhost:3009/' + product.imageUrl} />
            </div>
          )
        })
      }

    </div>
  )
}

export default Products
