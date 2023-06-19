import { react } from 'react'
export const getAllProducts = (setProducts, setIsLastItem, setLastId, setIsLoading, category: string | null) => {
  setLastId((lastValue: number) => {
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
