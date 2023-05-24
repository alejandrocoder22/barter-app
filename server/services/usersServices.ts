import { PrismaClient } from '@prisma/client'
import { User } from '../types'

const prisma = new PrismaClient()

export const getAllUsers = async () => await prisma.user.findMany()
export const createUser = async (userData: User) => await prisma.user.create({ data: userData })
export const updateUser = async (userData: User) => {
  await prisma.user.update({
    where: {
      id: userData.id
    },
    data: userData
  })
}
