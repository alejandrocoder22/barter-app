import express from 'express'
import * as usersControllers from '../controllers/usersControllers'

export const router = express.Router()

router.get('/', usersControllers.getAllUsers)
