import express from 'express'
import * as likesControllers from '../controllers/likesControllers'
export const router = express.Router()


router.post ('/', likesControllers.postLike )	




