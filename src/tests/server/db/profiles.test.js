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

test('insertProfile inserts new profile', () => {
  const expectedProfileId = 3

  return db
    .insertProfile(3, user, testDb)
    .then(user => {
      const actualProfileId = user[0]
      expect(actualProfileId).toBe(expectedProfileId)
    })
    .catch(err => expect(err).toBeNull())
})