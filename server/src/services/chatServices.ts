import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export const createConversation = async (senderId: number, receiverId: number) => await prisma.conversation.create({
    data: {
        senderId,
        receiverId
    }
})


export const getConversationById = async (userId: number) => await prisma.conversation.findMany({
    where: {
        senderId: userId
    }
})

export const createMessage = async (senderId: number, conversationId: number, text: string) => await prisma.message.create({
    data: {
        senderId,
        text,
        conversationId
    }
})

export const getMessages = async (conversationId: number) => await prisma.message.findMany({
    where: {
        conversationId: conversationId
    }
})