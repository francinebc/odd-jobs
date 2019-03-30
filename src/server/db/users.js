const connection = require('./index')
const { generateHash } = require('../auth/hash')

module.exports = {
  registerUser,
  getUser
}

<<<<<<< HEAD
function registerUser(user, db = connection) {
  generateHash(user.password).then(hash => {
    return db('users')
      .insert({
        email: user.email,
        hash
      })
      .then(([id]) => {
        return db('profiles')
=======
function registerUser (user, db = connection) {
  return generateHash(user.password)
    .then(hash => {
      return db('users')
        .insert({
          email: user.email,
          hash
        })
        .then(([id]) => {
          return db('profiles')
>>>>>>> bdba6913b1eaf643db0a280f18289c41ccb20808
          .insert({
            user_id: id,
            first_name: user.firstName,
            last_name: user.lastName
          })
          .then(() => {
            return id
          })
<<<<<<< HEAD
      })
  })
=======
        })
    })
>>>>>>> bdba6913b1eaf643db0a280f18289c41ccb20808
}

function getUser(user, db = connection) {
  return db('users')
    .where({
      username: user.username
    })
    .first()
}
