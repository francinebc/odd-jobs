import * as express from 'express'
import { Request, Response } from 'express'
import db from '../db/users'
import token from '../auth/token'
import hash from '../auth/hash'

const router = express.Router()

router.post('/signUp', validateSignUp, signUp, token.issue)
router.post('/login', validateLogin, checkUser, token.issue)

function validateSignUp (req: Request, res: Response, next: () => void) {
  const {email, firstName, lastName, password} = req.body
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

function signUp (req: Request, res: Response, next: () => void) {
  db.signUpUser(req.body)
    .then((id: number) => {
      res.locals.userId = id
      next()
    })
    .catch(({message}: Error) => {
      message.includes('UNIQUE constraint failed: users.username')
        ? authError(res, 'User already exists.', 400)
        : authError(res, `Something bad happened. We don't know why.`, 500)
    })
}


function validateLogin (req: Request, res: Response, next: () => void) {
  const {email, password} = req.body
  if (!email) {
    return authError(res, 'No email provided', 400)
  }
  if (!password) {
    return authError(res, 'No password provided', 400)
  }

  next()
}

function checkUser (req: Request, res: Response, next: () => void) {
  db.getUser(req.body)
    .then(user => {
      if (user) res.locals.userId = user.id
      return user && hash.verify(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      res.status(400).json({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res: Response) {
  res.status(400).json({
    errorType: 'INVALID_CREDENTIALS'
  })
}

function authError (res: Response, errorMessage: string, errorCode: number) {
  res.status(errorCode).json({
    ok: false,
    message: errorMessage
  })
}

module.exports = router