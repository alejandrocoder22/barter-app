const request = require('supertest')
import { after } from 'node:test'
import * as usersServices from '../../services/usersServices'

const app = require( '../../index.ts')

describe('Tests In usersRouter', () => {

  beforeAll( async () => {
    const mockupUser = {
      username: 'testUser',
      password: '123456',
      email: 'testUser@gmail.com'
    }
    await usersServices.createUser(mockupUser)
  })

  test('GET /api/users Should return 200', async () => {
   const response = await request(app)
      .get('/api/users')
     
      expect(response.status).toBe(200)

      console.log(response)
  })


  afterAll(() => {
    
  })
  
})
