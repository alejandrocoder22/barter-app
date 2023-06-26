import { PrismaClient } from '@prisma/client'
import { User } from '../types'

const prisma = new PrismaClient()

export const getAllUsers = async () => await prisma.user.findMany()
export const createUser = async (userData: User) => await prisma.user.create({ data: userData })
export const updateUser = async (userData: User, userId: number) => {
  await prisma.user.update({
    where: {
      id: Number(userId)
    },
    data: userData
  })
}
export const deleteUser = async (userId: number) => await prisma.user.delete({
  where: {
    id: userId
  }
})

export const checkUser = async (userName: string) => await prisma.user.findFirst({ where: { userName } })

export const getUserById = async (userId: number) => await prisma.user.findFirst({ where: { id: userId } })
export const uploadProfileImage = async (userId: number, imgUrl: string) => {
  await prisma.user.update({ where: { id: userId }, data: { profileImg: imgUrl } })
}
