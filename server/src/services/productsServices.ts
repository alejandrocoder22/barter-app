
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
