
import { PrismaClient } from '@prisma/client'
import { Product } from '../types'

const prisma = new PrismaClient()

export const getAllProducts = async () => await prisma.product.findMany()
export const createProduct = (product: Product) => prisma.product.create({ data: product })
export const updateProduct = (product: Product) => prisma.product.update({
  where: {
    id: product.id
  },
  data: product
})
export const deleteProduct = (productId: number) => prisma.product.delete({ where: { id: productId } })
