const request = require('supertest')
const usersServices = require('../../services/usersServices')
const productsServices = require('../../services/productsServices')
const app = require('../..')
const PRODUCTS_BASE_URL = '/api/products'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

describe('Tests in productsRoutes', () => {
  const mockupUser = {
    userName: 'testUserProduct',
    password: '123456',
    email: 'testUserProduct@gmail.com'
  }

  beforeAll(async () => {
    await usersServices.createUser(mockupUser)

    const testUser = await prisma.user.findUnique({ where: { userName: 'testUserProduct' } })

    const mockupProduct = {
      productName: 'testProduct',
      userId: testUser.id,
      estimatedValue: 12,
      status: 'new',
      imageUrl: 'www.test.com',
      category: 'cars'
    }

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
    await prisma.product.delete({ where: { id: allProducts[allProducts.length - 1].id } })
    await prisma.user.delete({ where: { userName: mockupUser.userName } })
  })
})
