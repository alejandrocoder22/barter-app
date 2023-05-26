import * as productsServices from '../services/productsServices'
import express from 'express'

export const getAllProducts = async (_req: express.Request, res: express.Response) => {
    try {
        const products = await productsServices.getAllProducts()
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send(error)
    }
}
export const createProduct = (req: express.Request, res: express.Response) => {
    const product = req.body
    try {
        productsServices.createProduct(product)
        res.status(200).send('Product created')
    } catch (error) {
        res.status(400).send(error)
    }
}
export const updateProduct = (req: express.Request, res: express.Response) => {
        const product = req.body
    try {
        productsServices.updateProduct(product)
        res.status(200).send('Product updated')
    } catch (error) {
        res.status(400).send(error)
    }
}
export const deleteProduct = (req: express.Request, res: express.Response) => {
    const productId = req.body
    try {
         productsServices.deleteProduct(productId)
        res.status(200).send('Product deleted')
    } catch (error) {
          res.status(400).send(error)
    }
}