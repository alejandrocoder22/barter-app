import bcrypt from 'bcrypt'
import { User } from '../types'

const encryptPassword = async (user: User) => {
  const SALT_ROUNDS = 10

  const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS)

  return hashedPassword
}

export default encryptPassword
