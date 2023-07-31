import jwt from 'jsonwebtoken'
import express from 'express'
import { User } from '../types'

 const generateToken = (res: express.Response, user: User, secret: any) => {
  const token = jwt.sign({ userId: user.id, userName: user.userName }, secret)

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000
  })
}

export default generateToken
