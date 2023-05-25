import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { router as usersRouter } from './router/users'
const app = express()

dotenv.config()

app.use(cors())

app.use(express.json())

app.use('/api/users', usersRouter)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))

module.exports = app
