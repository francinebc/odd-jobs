const testEnv = require('./test-environment')
const db = require('../../../server/db/users')

let testDb = null

const user = {
  email: 'sandra@hotmail.com',
  firstName: 'sandra',
  lastName: 'many',
  password: '1234',
}

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('insertUser returns id', () => {
  const expectedId = 3
  const hash = "akbsafbf"
  return db
    .insertUser(user, hash, testDb)
    .then((data) => {
      const actualId = data[0]
      expect(actualId).toBe(expectedId)
    })
    .catch(err => expect(err).toBeNull())
})

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

test('signUpUser does not re-signup same user', () => {
  const expectedError = 'UNIQUE constraint failed: users.email'
  return db
    .signUpUser(user, testDb)
    .then(() => {
      db.signUpUser(user, testDb)
        .catch(err => {
          const actualError = err.message
          const containing = actualError.includes(expectedError)
          expect(containing).toBe(true)
        })
    })
    .catch(err => expect(err).toBeNull())
})

test('signUpUser hashes password', async () => {
  await db.signUpUser(user, testDb)
  const data = await db.getUser(user, testDb)
  const matched = user.password === data.hash
  expect(matched).toBeFalsy()
})

test('getUser returns user with correct email', async () => {
  await db.signUpUser(user, testDb)
  const data = await db.getUser(user, testDb)
  expect(user.email).toMatch(data.email)
})

test('getUser returns undefined with incorrect email', async () => {
  await db.signUpUser(user, testDb)
  user.email = 'sammy'
  const data = await db.getUser(user, testDb)
  expect(data).toBeUndefined()
})