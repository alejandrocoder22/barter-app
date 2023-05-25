import express from 'express'
import * as dotenv from 'dotenv'
import { router as usersRouter } from './router/users'
dotenv.config()

const app = express()

app.use(express.json())

app.use('/api/users', usersRouter)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))

module.exports = app
