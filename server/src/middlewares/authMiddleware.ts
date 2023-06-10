import jwt from 'jsonwebtoken'
import express from 'express'

export const protectedRoute = async (req: any, res: express.Response, next: express.NextFunction) => {
  let token
  try {
    token = req.cookies.jwt

    if (token) {
      const secret: any = process.env.JWT_SECRET
      const decoded = jwt.verify(token, secret)

      req.user = decoded

      next()
    } else {
      res.status(401)
      throw new Error('Unauthorized')
    }
  } catch (error: any) {
    res.send(error.message)
  }
}
