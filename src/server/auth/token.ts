import * as jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import jwtTestSecret from '../../tests/server/routes/jwt-test-secret'
import * as verifyJwt from 'express-jwt'

export function issue (req: Request, res: Response) {
  res.json({
    ok: true,
    message: 'Authentication successful.',
    userId: res.locals.userId,
    token: createToken(res.locals.userId)
  })
}

function createToken (id: number) {
  const secret = process.env.JWT_SECRET || jwtTestSecret
  return jwt.sign({id}, secret, {expiresIn: '1d'})
}

export const getSecret: verifyJwt.SecretCallback = (req, payload, done) => {
  const secret = process.env.JWT_SECRET || jwtTestSecret
  done(null, secret)
}

export default {
  issue,
  getSecret
}