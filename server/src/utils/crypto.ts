import bcrypt from 'bcrypt'
import { User } from '../types'

export const encryptPassword = async (user: User) => {
  const SALT_ROUNDS = 10

  const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS)

  return hashedPassword
}

export const comparePasswords = async (plainPassword: string, hashedPassword: any) => {

  const result = await bcrypt.compare(plainPassword, hashedPassword)

  if (result) {
    return true
  } else {
    return false
  }
}
