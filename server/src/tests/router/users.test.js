const request = require('supertest')
const usersServices = require('../../services/usersServices')

const app = require('../../index.ts')

describe('Tests In usersRouter', () => {
  beforeAll(async () => {
    const mockupUser = {
      userName: 'testUser',
      password: '123456',
      email: 'testUser@gmail.com'
    }
    await usersServices.createUser(mockupUser)
  })

  test('GET /api/users Should return 200 And right user', async () => {
    const response = await request(app)
      .get('/api/users')

    expect(response.status).toBe(200)
    expect(response.body[response.body.length - 1].userName).toBe('testUser')
  })

  afterAll(async () => {
    const allUsers = await usersServices.getAllUsers()
    usersServices.deleteUser(allUsers[allUsers.length - 1].id)
  })
})
