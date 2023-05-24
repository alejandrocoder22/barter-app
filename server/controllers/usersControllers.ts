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
