import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const postLike = async (userId: number, productId: number) => await prisma.like.create({
  data: {
    userId,
    productId: Number(productId)
  }
})

export const getLikes = async (userId: number) => await prisma.like.findMany({
  where: {
    userId: Number(userId)
  }
})

export const deleteLike = async (userId: number, productId: number) => await prisma.like.deleteMany({

  where: {
    productId: Number(productId),
    userId: Number(userId)

  }
})
