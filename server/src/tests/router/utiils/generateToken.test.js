const generateToken = require('../../../utils/generateToken')
const express = require('express')

const mockupUser = {
  userId: '2',
  userName: 'test',
  password: '123456'
}

describe('Tests in generateToken', () => {
  it('Should generate token correctly', () => {
    const response = generateToken(express.response, mockupUser, process.env.JWT_SECRET)
    console.log(response)
  })
})
