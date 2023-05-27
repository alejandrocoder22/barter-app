import express from 'express'
import { User } from '../types'

export const validateUser = (res: express.Response, userName: string, password: string) => {
  if (!userName || !password) {
    res.status(400)
    throw new Error('Insert username and password')
  }
}

export const validateCreateUser = (res: express.Response, user: User) => {
  if (!user.userName || !user.password || !user.email) {
    res.status(400)
    throw new Error('Insert all required fields')
  }

  if (user.password.length < 6) {
    res.status(400)
    throw new Error('Password must be over 6 characters length')
  }
}
