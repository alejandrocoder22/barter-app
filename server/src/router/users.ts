import express from 'express'
import * as usersControllers from '../controllers/usersControllers'
import { protectedRoute } from '../middlewares/authMiddleware'
import { upload } from '../config/multer'

export const router = express.Router()

router.get('/verify', protectedRoute, usersControllers.verifyUser)
router.get('/', usersControllers.getAllUsers)
router.get('/:userId',   usersControllers.getUserById)
router.post('/login', usersControllers.loginUser)
router.post('/logout', usersControllers.logOutUser)
router.post('/register', usersControllers.createUser)
router.post('/image',protectedRoute, upload.single('profileImage'), usersControllers.uploadProfileImage)
router.put('/', usersControllers.updateUser)
router.delete('/', usersControllers.deleteUser)
