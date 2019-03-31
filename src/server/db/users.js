const connection = require('./index')
const { generateHash } = require('../auth/hash')

module.exports = {
  registerUser,
  getUser
}

function registerUser(user, db = connection) {
  generateHash(user.password).then(hash => {
    return db('users')
      .insert({
        email: user.email,
        hash
      })
      .then(([id]) => {
        return db('profiles')
          .insert({
            user_id: id,
            first_name: user.firstName,
            last_name: user.lastName
          })
          .then(() => {
            return id
          })
      })
  })
}

function getUser(user, db = connection) {
  return db('users')
    .where({
      username: user.username
    })
    .first()
}
