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

test('insertUser returns id', async () => {
  const expectedId = 3
  const hash = "akbsafbf"
  const data = await db.insertUser(user, hash, testDb)
  const actualId = data[0]
  expect(actualId).toBe(expectedId)
})

test('signUpUser registers a new user', async () => {
  const expectedId = 3
  const id = await db.signUpUser(user, testDb)
  const actualId = id
  expect(actualId).toBe(expectedId)
})

test('signUpUser does not re-signup same user', async () => {
  const expectedError = 'UNIQUE constraint failed: users.email'
  await db.signUpUser(user, testDb)
  try {
    await db.signUpUser(user, testDb)
  }
  catch(err) {
    const actualError = err.message
    const containing = actualError.includes(expectedError)
    expect(containing).toBe(true)
  }
})

test('signup-user has unique id', async () => {
  const user2 = {
    email: 'cam@hotmail.com',
    firstName: 'cam',
    lastName: 'dam',
    password: '1234',
  }
  const id1 = await db.signUpUser(user, testDb)
  const id2 = await db.signUpUser(user2, testDb)
  expect(id1).not.toBe(id2)
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