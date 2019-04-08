const connection = require('./index')
const { generateHash } = require('../auth/hash')

module.exports = {
  signUpUser,
  getUser,
  insertUser,
  insertProfile
}

async function signUpUser(user, db = connection) {
  const hash = await generateHash(user.password)
  const [id] = await insertUser(user.email, hash, db)
  await insertProfile(id, user, db)
  return id
}

function insertUser(email, hash, db) {
  return db('users')
      .insert({
        email,
        hash
      })
}

function insertProfile(id, user, db) {
  return db('profiles')
    .insert({
      user_id: id,
      first_name: user.firstName,
      last_name: user.lastName
    })
}

function getUser(user, db = connection) {
  return db('users')
    .where({
      email: user.email
    })
    .first()
}
