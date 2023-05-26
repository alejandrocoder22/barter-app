import * as usersServices from '../services/usersServices'
import express from 'express'
import generateToken from '../utils/generateToken'
import { encryptPassword, comparePasswords } from '../utils/crypto'

export const getAllUsers = async (_req: express.Request, res: express.Response) => {
  try {
    const users = await usersServices.getAllUsers()
    res.send(users)
  } catch (error) {
    res.send(error)
  }
}

export const loginUser = async (req: express.Request, res: express.Response) => {
  const user = req.body

  try {
    const currentUser = await usersServices.checkUser(user.userName)

    const isPasswordRight = await comparePasswords(user.password, currentUser?.password)


    if (isPasswordRight) {
      generateToken(res, user, process.env.JWT_SECRET)
      res.status(200).send({ message: 'User logged in' })
    } else {
      res.status(401)
      throw new Error('Invalid username or password')
    }
  } catch (error: any) {
    res.send(error.message)
  }
}

export const createUser = async (req: express.Request, res: express.Response) => {
  const user = req.body

  const userExist = await usersServices.checkUser(user.userName)

  if (userExist != null) {
    res.status(400).send({ message: 'User already exist' })
    return
  }

  const hashedPassword = await encryptPassword(user)

  user.password = hashedPassword

  const newUser = await usersServices.createUser(user)

  if (newUser) {
    generateToken(res, newUser, process.env.JWT_SECRET)
    res.send({ message: 'User created', newUser })
  }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
  const user = req.body
  const updatedUser = await usersServices.updateUser(user)
  res.send(updatedUser)
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    await usersServices.deleteUser(req.body.id)
    res.send('User Deleted')
  } catch (error) {
    res.status(400).send(error)
  }
}
