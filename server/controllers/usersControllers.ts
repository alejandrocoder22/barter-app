import * as usersServices from '../services/usersServices'
import express from 'express'

export const getAllUsers = async (_req: express.Request, res: express.Response) => {
  try {
    const users = await usersServices.getAllUsers()
    res.send(users)
  } catch (error) {
    res.send(error)
  }
}

export const createUser = async (req: express.Request, res: express.Response) => {
  const user = req.body

  const newUser = await usersServices.createUser(user)
  res.send(newUser)
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
