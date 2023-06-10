import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { router as usersRouter } from './router/users'
import { router as productsRouter } from './router/products'
import { router as likesRouter } from './router/likes'
import { customErrorHandler } from './middlewares/customErrors'
import cookiePArser from 'cookie-parser'
import { Server } from 'socket.io'
import { createServer } from 'http'

dotenv.config({ path: './process.env' })

const httpServer = createServer()
const app = express()

app.use('/uploads', express.static('uploads'))

app.use(cors())
app.use(express.json())
app.use(cookiePArser())
app.use(customErrorHandler)

app.use('/api/likes', likesRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
})

io.on('connection', _socket => {
  console.log('Connected')
})

httpServer.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))

module.exports = app
