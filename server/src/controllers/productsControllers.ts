import * as productsServices from '../services/productsServices'
import {Request, Response} from 'express'
import fs from 'fs'

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productsServices.getAllProducts()
    res.status(200).send(products)
  } catch (error:any) {
    res.send(error.message)
  }
}

export const getProductsByUser = async (req: any, res: Response) => {
try {
  if(Number(req.params.userId) !== Number(req.user.userId)) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const productsofUser = await productsServices.getProductsByUser(req.params.userId)
  res.send(productsofUser)
} catch (error: any) {
  res.send(error.message)
}
}

export const createProduct = async (req: any, res: Response) => {
  const product = req.body

  const { productImages, productName, estimatedValue, status, category } = req.body

  try {

  if (!productImages || !productName || !estimatedValue || !status || !category) {
    res.status(400)
    throw new Error('All fields are required')
  }

    product.imageUrl = 'uploads/' + req.file.filename
    product.userId = req.user.userId
    product.estimatedValue = Number(product.estimatedValue)
    const newProduct = await productsServices.createProduct(product)

    res.status(200).send({ message: 'Product created', newProduct })
  } catch (error: any) {
    res.send(error.message)
  }
}

export const updateProduct = (req: Request, res: Response) => {
  const product = req.body
  try {
    productsServices.updateProduct(product)
    res.status(200).send('Product updated')
  } catch (error: any) {
    res.send(error.message)
  }
}
export const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.body
  try {
    const productDeleted = await productsServices.deleteProduct(productId)

    if (productDeleted) {
      fs.rm(productDeleted.imageUrl, (error) => {
        console.log(error)
      })
    }

    res.status(200).send({ message: 'Product deleted', productDeleted })
  } catch (error) {
    res.status(400).send(error)
  }
}

export const getProductsByCategory = async (req: Request, res: Response) => {
  const { categoryId, cursor } = req.query
  try {
    if (categoryId) {
      const productsByCategory = await productsServices.getProductsByCategory(categoryId, cursor)
      res.status(200).send(productsByCategory)
    }
  } catch (error: any) {
    res.send(error.message)
  }
}

