
import { PrismaClient } from '@prisma/client'
import { Product } from '../types'

const prisma = new PrismaClient()
export const getSingleProduct = async (productId: number) => await prisma.product.findUnique({ where: { id: productId } })
export const getAllProducts = async () => await prisma.product.findMany()
export const createProduct = async (product: Product) => await prisma.product.create({ data: product })
export const updateProduct = async (product: Product) => await prisma.product.update({
  where: {
    id: product.id
  },
  data: product
})

export const getProductsByUser = async (userId: number) => await prisma.product.findMany({ where: { userId: Number(userId) } })
export const deleteProduct = async (productId: number) => await prisma.product.delete({ where: { id: productId } })
export const getProductsByCategory = async (category: any, cursor: any) => {
  return cursor === 'null' || cursor === 'undefined' || !cursor
    ? await prisma.product.findMany({
      take: 15,
      skip: 1,
      where: {
        category: {
          contains: category
        }
      },
      orderBy: {
        id: 'asc'
      }
    })
    : await prisma.product.findMany({
      take: 15,
      skip: 1,
      cursor: {
        id: Number(cursor)
      },
      where: {
        category: {
          contains: category
        }
      },
      orderBy: {
        id: 'asc'
      }
    })
}

export const getLikedProducts = async (userId: number) => await prisma.like.findMany({
  where: {
    userId: Number(userId)
  },
  include: {
    product: true
  }
})
