const { comparePasswords, encryptPassword } = require('../../../utils/crypto')

describe('Test in crypto.js', () => {
  const mockupUser = {
    userName: 'test',
    password: '123456'
  }

  test('EncryprPassword works correctly', async () => {
    const hashedPassword = await encryptPassword(mockupUser)
    expect(hashedPassword.length).toBeGreaterThan(mockupUser.password.length)
  })

  test('ComparePasswords works correctly', async () => {
    const hashedPassword = await encryptPassword(mockupUser)
    const resultOfComparation = await comparePasswords(mockupUser.password, hashedPassword)
    const wrongPassword = await comparePasswords('52353252353', hashedPassword)
    expect(resultOfComparation).toBe(true)
    expect(wrongPassword).toBe(false)
  })
})
