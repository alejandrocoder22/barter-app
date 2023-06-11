import express from 'express'
import * as usersControllers from '../controllers/usersControllers'

export const router = express.Router()

router.get('/', usersControllers.getAllUsers)
router.get('/:userId', usersControllers.getUserById)
router.post('/login', usersControllers.loginUser)
router.post('/logout', usersControllers.logOutUser)
router.post('/register', usersControllers.createUser)
router.put('/', usersControllers.updateUser)
router.delete('/', usersControllers.deleteUser)
