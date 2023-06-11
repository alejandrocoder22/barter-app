import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { router as usersRouter } from './router/users'
import { router as productsRouter } from './router/products'
import { router as likesRouter } from './router/likes'
import { router as chatRouter } from './router/chat'
import { customErrorHandler } from './middlewares/customErrors'
import cookiePArser from 'cookie-parser'
import { Server } from 'socket.io'
import { createServer } from 'http'
import { getUserDataFromToken } from './utils/getUserDataFromToken'
dotenv.config({ path: './process.env' })

const app = express()
const httpServer = createServer(app)

app.use('/uploads', express.static('uploads'))

app.use(cors())
app.use(express.json())
app.use(cookiePArser())
app.use(customErrorHandler)

app.use('/api/likes', likesRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)
app.use('/api/chat', chatRouter)

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
})

io.use((socket: any, next) => {
  const token = socket.handshake.headers.cookie?.split('=')[1]

  if (token) {
    const userData: any = getUserDataFromToken(token)
    socket.userName = userData.userName
    socket.userId = userData.userId
  }

  next()
})

let users: any = []

const addUserOnConnect = (userId: number, socketId: string) => {
  !users.some((user: any) => user.userId === userId) &&
  users.push({
    userId,
    socketId

  })
}

const getUser = (receiverId: number) => users.find((user: any) => user.userId === receiverId)

const removeUserOnDisconnect = (socketId: string) => {
  users = users.filter((user: any) => user.socketId !== socketId)
}

io.on('connection', (socket: any) => {
  console.log('User connected')

  addUserOnConnect(socket.userId, socket.id)
  io.emit('getUsers', users)
  // @ts-expect-error
  socket.on('sendMessage', ({ recieverId, text }) => {
    const user = getUser(recieverId)
    io.to(user?.socketId).emit('getMessage', ({
      userId: socket.userId,
      text
    }))
  })

  socket.on('disconnect', () => {
    removeUserOnDisconnect(socket.id)
    io.emit('getUsers', users)
    console.log('UIser disconnected')
  })
})

httpServer.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))

module.exports = app
