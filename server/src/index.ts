import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { router as usersRouter } from './router/users'
import { router as productsRouter } from './router/products'

dotenv.config({ path: './process.env' })

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))

module.exports = app
