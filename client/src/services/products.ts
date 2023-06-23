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

export const addProduct = async (form, file) => {
  e.preventDefault()

  const formData = new FormData()

  Object.keys(form).forEach((key) => {
    formData.append(key, form[key])
  })
  formData.append('productImages', file)

  const petition = await fetch('/api/products', {
    method: 'POST',
    body: formData
  })
  const response = await petition.json()
}

export const getProductById = async (productId, setProduct) => {
  const petition = await fetch(`/api/products/singleProduct/${productId}`)
  const singleProduct = await petition.json()

  setProduct(singleProduct)
}
