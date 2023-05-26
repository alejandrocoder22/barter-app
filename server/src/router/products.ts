import express from 'express'
import * as productsControllers from '../controllers/productsControllers'
export const router = express.Router()

router.get('/',    productsControllers.getAllProducts)
router.post('/',   productsControllers.createProduct)
router.delete('/', productsControllers.deleteProduct)
router.put('/', productsControllers.updateProduct)