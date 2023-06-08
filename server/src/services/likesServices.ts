import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
export const postLike = async (userId: number, productId: number) => await prisma.like.create({
    data: {
        userId: userId,
        productId: Number(productId)
    }
}) 