const express = require('express')
const db = require('../db/users')
const router = express.Router()
const token = require('../auth/token')
const hash = require('../auth/hash')

router.post('/signUp', validateSignUp, signUp, token.issue)
router.post('/login', validateLogin, checkUser, token.issue)

function validateSignUp (req, res, next) {
  const {email, firstName, lastName, password} = req.body
  console.log(req.body)
  if (!firstName) {
    return authError(res, 'No first name provided', 400)
  }
  if (!lastName) {
    return authError(res, 'No last name provided', 400)
  }
  if (!email) {
    return authError(res, 'No email provided', 400)
  }
  if (!password) {
    return authError(res, 'No password provided', 400)
  }
  next()
} 

function signUp (req, res, next) {
  db.signUpUser(req.body)
    .then((id) => {
      res.locals.userId = id
      next()
    })
    .catch(({message}) => {
      message.includes('UNIQUE constraint failed: users.email')
        ? authError(res, 'User already exists.', 400)
        : authError(res, `Something bad happened. We don't know why.`, 500)
    })
}


function validateLogin (req, res, next) {
  const {email, password} = req.body
  if (!email) {
    return authError(res, 'No email provided', 400)
  }
  if (!password) {
    return authError(res, 'No password provided', 400)
  }

  next()
}

function checkUser (req, res, next) {
  db.getUser(req.body)
    .then(user => {
      if (user) res.locals.userId = user.id
      return user && hash.verify(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {authError(res, `Something bad happened. We don't know why.`, 500)})
}

function invalidCredentials (res) {
  res.status(400).json({
    errorType: 'INVALID_CREDENTIALS'
  })
}

function authError (res, errorMessage, errorCode) {
  res.status(errorCode).json({
    ok: false,
    message: errorMessage
  })
}

module.exports = router