const request = require('supertest')

const app = require( '../../index.ts')

describe('Tests In usersRouter', () => {
  test('GET /api/users Should return 200', async () => {
   const response = await request(app)
      .get('/api/users')
     
      expect(response.status).toBe(200)
  })
})
