import express from 'express'
import * as productsControllers from '../controllers/productsControllers'
import { protectedRoute } from '../middlewares/authMiddleware'
import { upload } from '../config/multer'
export const router = express.Router()

router.get('/', productsControllers.getAllProducts)
router.get('/likedProducts', protectedRoute, productsControllers.getLikedProducts)
router.get('/category', productsControllers.getProductsByCategory)
router.get('/singleProduct/:productId', productsControllers.getSingleProduct)
router.get('/:userId', protectedRoute, productsControllers.getProductsByUser)
router.post('/', protectedRoute, upload.single('productImages'), productsControllers.createProduct)
router.delete('/', productsControllers.deleteProduct)
router.put('/', productsControllers.updateProduct)
