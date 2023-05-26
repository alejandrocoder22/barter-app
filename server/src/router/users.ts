import express from 'express'
import * as usersControllers from '../controllers/usersControllers'

export const router = express.Router()

router.get('/', usersControllers.getAllUsers)
router.post('/login', usersControllers.loginUser)
router.post('/', usersControllers.createUser)
router.put('/', usersControllers.updateUser)
router.delete('/', usersControllers.deleteUser)
