import * as usersServices from '../services/usersServices'
import express from 'express'

export const getAllUsers: any = async (_req: express.Request, res: express.Response) => {
  try {
    const users = await usersServices.getAllUsers()
    res.send(users)
  } catch (error) {
    res.send(error)
  }
}

export const createUser: any = async (req: express.Request, res: express.Response) => {
 const user = req.body


 const userData = {
    userName: user.userName,
    password: user.password,
    email: user.email
 }
  const newUser = await usersServices.createUser(userData)
 res.send(newUser)
}
