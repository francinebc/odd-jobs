const testEnv = require('./test-environment')
const db = require('../../../server/db/users')

let testDb = null

const user = {
  email: 'sandra@hotmail.com',
  firstName: 'sandra',
  lastName: 'many',
  password: '1234'
}

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('signUpUser registers a new user', () => {
  const expectedId = 3

  return db
    .signUpUser(user, testDb)
    .then(id => {
      const actualId = id
      expect(actualId).toBe(expectedId)
    })
    .catch(err => expect(err).toBeNull())
})