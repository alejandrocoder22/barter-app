const request = require('supertest')
const productsServices = require('../../services/productsServices')
const app = require('../..')

const PRODUCTS_BASE_URL = '/api/products'

describe('Tests in productsRoutes', () => {
  const mockupProduct = {
    productName: 'testProduct',
    userId: 1,
    estimatedValue: 12,
    status: 'new',
    imageUrl: 'www.test.com',
    category: 'cars'
  }

  beforeAll(async () => {
    await productsServices.createProduct(mockupProduct)
  })

  test('GET /api/products should return 200', async () => {
    const response = await request(app)
      .get(PRODUCTS_BASE_URL)
    expect(response.status).toBe(200)
    expect(response.body[response.body.length - 1].productName).toBe('testProduct')
  })

  afterAll(async () => {
    const allProducts = await productsServices.getAllProducts()
    productsServices.deleteProduct(allProducts[allProducts.length - 1].id)
  })
})
