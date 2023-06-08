import express from 'express'
import * as likesControllers from '../controllers/likesControllers'
import { protectedRoute } from '../middlewares/authMiddleware'
export const router = express.Router()


router.post ('/', protectedRoute, likesControllers.postLike )	




