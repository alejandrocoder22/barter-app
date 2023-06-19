
import { useState, useEffect } from 'react'
import { getAllProducts } from '../services/products'

const useProducts = (isVisible) => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [_lastId, setLastId] = useState(null)
  const [isLastItem, setIsLastItem] = useState(false)

  useEffect(() => {
    setLastId(null)
    setProducts([])
    getAllProducts(setProducts, setIsLastItem, setLastId, setIsLoading, category)
  }, [category])

  useEffect(() => {
    if (isVisible && !isLastItem) getAllProducts(setProducts, setIsLastItem, setLastId, setIsLoading, category)
  }, [isVisible])

  return { products, isLoading, setCategory }
}

export default useProducts
