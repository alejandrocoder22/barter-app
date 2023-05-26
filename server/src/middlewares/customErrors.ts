import express from 'express'

export const customErrorHandler = (err: any, _req: express.Request, res: express.Response, _next: express.NextFunction ) => {

let statusCode = res.statusCode === 200 ? 500 : res.statusCode
let message = err.message

res.status(statusCode).json({
    message,
})

}

