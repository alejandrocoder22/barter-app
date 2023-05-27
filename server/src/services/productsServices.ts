
import { PrismaClient } from '@prisma/client'
import { Product } from '../types'

const prisma = new PrismaClient()

export const getAllProducts = async () => await prisma.product.findMany()
export const createProduct = async (product: Product) => await prisma.product.create({ data: product })
export const updateProduct = async (product: Product) => await prisma.product.update({
  where: {
    id: product.id
  },
  data: product
})
export const deleteProduct = async (productId: number) => await prisma.product.delete({ where: { id: productId } })
export const getProductsByCategory = async (category: any, cursor: any ) => {

  return cursor === undefined
    ? await prisma.product.findMany({
      take: 10,
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
      take: 10,
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
