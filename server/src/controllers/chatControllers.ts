import * as chatServices from '../services/chatServices'
export const createConversation = async (req: any, res: any) => {
    try {
       await chatServices.createConversation(req.user.userId, req.body.receiverId)
       res.status(200).send('Conversation created')
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}

export const getConversationById = async (req: any, res: any) => {
    try {
        const conversation = await chatServices.getConversationById(Number(req.user.userId))
        res.status(200).send(conversation)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}

export const createMessage = async (req: any, res: any) => {
    try {
        await chatServices.createMessage(Number(req.user.userId), Number(req.body.conversationId), req.body.text)
        res.status(200).send('Message created')
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}

export const getMessages = async (req: any, res: any) => {
    try {
        const messages = await chatServices.getMessages(Number(req.params.conversationId))
        res.send(messages)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}