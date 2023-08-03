import * as productsServices from '../services/productsServices'
import { Request, Response } from 'express'
import fs from 'fs'
import { validateProduct } from '../utils/validateProduct'

export const getSingleProduct = async (_req: Request, res: Response) => {
  const { productId } = _req.params
  try {
    const product = await productsServices.getSingleProduct(Number(productId))
    res.status(200).send(product)
  } catch (error: any) {
    throw new Error(error.message)
    res.send(error.message)
  }
}
export const getAllProducts = async (req: any, res: Response) => {
  const { categoryId, cursor } = req.query
  try {
    const productsByCategory = await productsServices.getAllProducts(categoryId, cursor)

    const isLastItem = productsByCategory.length < 15
    res.status(200).send({ products: productsByCategory, isLastItem })
  } catch (error: any) {
    res.send(error.message)
  }
}

export const getProductsByUser = async (req: any, res: Response) => {
  try {
    if (Number(req.params.userId) !== Number(req.user.userId)) {
      res.status(401)
      throw new Error('User not authorized')
    }

    const productsofUser = await productsServices.getProductsByUser(req.params.userId)
    res.status(200).send(productsofUser)
  } catch (error: any) {
    res.send(error.message)
  }
}

export const createProduct = async (req: any, res: Response) => {
  const product = req.body

  try {
    validateProduct(req.body, res, req)
    product.imageUrl = 'uploads/' + req.file.filename
    product.userId = req.user.userId
    product.estimatedValue = Number(product.estimatedValue)
    const newProduct = await productsServices.createProduct(product)

    res.status(200).send({ message: 'Product created', newProduct })
  } catch (error: any) {
    res.json(error.message)
  }
}

export const updateProduct = (req: any, res: Response) => {
  const product = req.body
  try {
    if (Number(req.user.userId) === Number(product.userId)) {
      product.estimatedValue = Number(product.estimatedValue)

      productsServices.updateProduct(product)
      res.status(200).send('Product updated')
    } else {
      throw new Error('You can only delete your products')
    }
  } catch (error: any) {
    res.send(error.message)
  }
}
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productDeleted = await productsServices.deleteProduct(Number(req.params.productId))

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

export const getLikedProducts = async (req: any, res: Response) => {
  try {
    const likedProducts = await productsServices.getLikedProducts(req.user.userId)
    res.status(200).send(likedProducts)
  } catch (error: any) {
    res.send(error.message)
  }
}
