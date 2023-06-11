import express from 'express'
import { createConversation, createMessage, getConversationById, getMessages } from '../controllers/chatControllers'
import { protectedRoute } from '../middlewares/authMiddleware'

export const router =express.Router()

router.post('/', protectedRoute, createConversation)
router.post('/message', protectedRoute, createMessage)
router.get('/:id', getConversationById)
router.get('/message/:conversationId', getMessages)