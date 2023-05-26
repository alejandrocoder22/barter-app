const request = require('supertest')
const productsServices = require('../../services/productsServices')
const app = require('../../index.ts')

const PRODUCTS_BASE_URL = '/api/products'

describe('Tests in productsRoutes', () => {
  test('GET /api/products should return 200', async () => {
    const response = await request(app)
      .get(PRODUCTS_BASE_URL)
    expect(response.status).toBe(200)
  })
})
