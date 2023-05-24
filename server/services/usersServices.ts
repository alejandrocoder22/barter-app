import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllUsers = async () => await prisma.user.findMany()
export const createUser = async (userData: any) => prisma.user.create({data: userData})
    
