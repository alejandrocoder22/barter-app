import * as usersServices from '../services/usersServices'
import express from 'express'
import generateToken from '../utils/generateToken'
import { encryptPassword, comparePasswords } from '../utils/crypto'
import { validateUser, validateCreateUser } from '../utils/validateUser'

export const getAllUsers = async (_req: express.Request, res: express.Response) => {
  try {
    const users = await usersServices.getAllUsers()
    res.send(users)
  } catch (error) {
    res.send(error)
  }
}

export const getUserById = async (req: any, res: any) => {
  try {
    const user = await usersServices.getUserById(Number(req.params.userId))
    // @ts-expect-error
    const userWithoutSensibleData = { userName: user.userName, userId: user?.id, profileImg: user?.profileImg }
    res.status(200).send(userWithoutSensibleData)
  } catch (error: any) {
    res.send(error)
  }
}

export const loginUser = async (req: express.Request, res: express.Response) => {
  const user = req.body

  const { userName, password } = user

  try {
    validateUser(res, userName, password)

    const currentUser = await usersServices.checkUser(userName)

    if (currentUser == null) {
      res.status(401)
      throw new Error('User or password is not valid')
    }

    const isPasswordRight = await comparePasswords(password, currentUser?.password)

    if (isPasswordRight) {
      generateToken(res, currentUser, process.env.JWT_SECRET)
      res.status(200).send({ message: 'User logged in', userName: currentUser.userName, id: currentUser.id })
    } else {
      res.status(401)
      throw new Error('Invalid username or password')
    }
  } catch (error: any) {
    res.json(error.message)
  }
}

export const createUser = async (req: express.Request, res: express.Response) => {
  const user = req.body

  const { userName } = user

  try {
    validateCreateUser(res, user)

    const userExist = await usersServices.checkUser(userName)

    if (userExist != null) {
      res.status(400)
      throw new Error('User already exist')
    }

    const hashedPassword = await encryptPassword(user)

    user.password = hashedPassword

    const newUser = await usersServices.createUser(user)

    if (newUser) {
      generateToken(res, newUser, process.env.JWT_SECRET)
      res.send({ message: 'User created', userName: newUser.userName })
    }
  } catch (error: any) {
    res.json(error.message)
  }
}

export const updateUser = async (req: any, res: express.Response) => {
  const user = req.body
  try {
    await usersServices.updateUser(user, req.user.userId)
    res.status(200).send({ message: 'User updated' })
  } catch (error: any) {
    res.json(error.message)
  }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    await usersServices.deleteUser(req.body.id)
    res.send('User Deleted')
  } catch (error) {
    res.status(400).send(error)
  }
}

export const logOutUser = (_req: express.Request, res: express.Response) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  })

  res.status(200).send({ message: 'User logged out' })
}

export const uploadProfileImage = async (req: any, res: any) => {
  const profileImg = 'uploads/' + req.file.filename

  try {
    await usersServices.uploadProfileImage(req.user.userId, profileImg)
    res.status(200).send({ message: 'Image Uploaded' })
  } catch (error: any) {
    res.status(400)
    throw new Error(error.message)
  }
}

export const verifyUser = (req: any, res: any) => {
  res.status(200).send({ message: 'User verified', userData: req.user })
}
