import express from 'express'

export const validateUser = (res: express.Response, userName: string, password: string) => {
  if (!userName || !password) {
    res.status(400)
    throw new Error('Insert username and password')
  }
}


export const validateUserAndEmail = (res: express.Response, userName: string, password: string, email: string) => {
  if (!userName || !password || !email) {
    res.status(400)
    throw new Error('Insert all required fields')
  }
}

export const validatePassword = (res: express.Response, password: string) => {
  if (password.length < 6) {
    res.status(400)
    throw new Error('Password must be over 6 characters length')
  }
}
