import React from 'react'
import { IProduct } from '../types'

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

export const addProduct = async (e, form, file) => {
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
}

export const getProductsByUserId = async (userId: number, setProducts): Promise<void> => {
  if (userId) {
    const petition = await fetch(`/api/products/${userId}`)
    const response = await petition.json()

    setProducts(response)
  }
}
export const updateProduct = async (product: IProduct): Promise<void> => {
  const petition = await fetch('/api/products/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
}

export const deleteProduct = async (productId: number): Promise<void> => {
  await fetch(`/api/products/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'

    }
  })
}

export const getProductById = async (productId, setProduct) => {
  const petition = await fetch(`/api/products/singleProduct/${productId}`)
  const singleProduct = await petition.json()

  setProduct(singleProduct)
}

export const handleLike = async (isLiked, setIsLiked, isLikedByUser, productId) => {
  setIsLiked(!isLiked)
  if (!isLikedByUser()) {
    return await fetch('/api/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId })
    })
  } else {
    setIsLiked(!isLiked)
    return await fetch('/api/likes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId })
    })
  }
}

export const getLikes = async (setLikes) => {
  const petition = await fetch('/api/likes')
  const response = await petition.json()
  setLikes(response)
}

export const getProductsLiked = async (setLikedProducts) => {
  const petition = await fetch('/api/products/likedProducts')
  const response = await petition.json()

  setLikedProducts(response)
}
