const connection = require('./index')
const { generateHash } = require('../auth/hash')

module.exports = {
  signUpUser,
  getUser,
  insertUser,
  insertProfile
}

function signUpUser(user, db = connection) {
  return generateHash(user.password)
    .then(hash => {
      return insertUser(user.email, hash, db)
        .then(([id]) => {
          return insertProfile(id, user, db)
            .then((data) => {
              return id
            })
        })
  })
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
