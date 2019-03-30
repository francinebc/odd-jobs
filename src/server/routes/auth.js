const express = require('express')
const db = require('../db/users').default
const router = express.Router()
const token = require('../auth/token')

router.post('/register', validateRegister, register, token.issue)

function validateRegister (req, res, next) {
  const {email, firstName, lastName, password} = req.body
  if (!firstName) {
    return next(new Error('No first name provided'))
  }
  if (!lastName) {
    return next(new Error('No last name provided'))
  }
  if (!email) {
    return next(new Error('No email provided'))
  }
  if (!password) {
    return next(new Error('No password provided'))
  }

  next()
} 

function register (req, res, next) {
  db.registerUser(req.body)
    .then((id) => {
      res.locals.userId = id
      next()
    })
    .catch(({message}) => {
      message.includes('UNIQUE constraint failed: users.username')
        ? registrationError(res, 'User already exists.', 400)
        : registrationError(res, `Something bad happened. We don't know why.`, 500)
    })
}

module.exports = router