import express from 'express'

export const customErrorHandler = (err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  const message = err.message

  res.status(statusCode).json({
    message
  })
}
