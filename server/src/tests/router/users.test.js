const request = require('supertest')
const usersServices = require('../../services/usersServices')

const app = require('../../index.ts')

describe('Tests In usersRouter', () => {
  const mockupUser = {
    userName: 'testUser',
    password: '123456',
    email: 'testUser@gmail.com'
  }

  beforeAll(async () => {
    await usersServices.createUser(mockupUser)
  })

  test('GET /api/users Should return 200 And right user', async () => {
    const response = await request(app)
      .get('/api/users')

    expect(response.status).toBe(200)
  })

  afterAll(async () => {
    const userToDelete = await usersServices.checkUser(mockupUser.userName)
    usersServices.deleteUser(userToDelete.id)
  })
})
