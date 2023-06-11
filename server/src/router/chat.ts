import express from 'express'
import { createConversation, createMessage, getConversationById, getConversationByconversationId, getMessages } from '../controllers/chatControllers'
import { protectedRoute } from '../middlewares/authMiddleware'

export const router = express.Router()

router.get('/:conversationId', getConversationByconversationId)
router.post('/', protectedRoute, createConversation)
router.post('/message', protectedRoute, createMessage)
router.get('/', protectedRoute, getConversationById)
router.get('/message/:conversationId', getMessages)
