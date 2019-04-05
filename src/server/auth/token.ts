import jwt from 'jsonwebtoken'
import jwtTestSecret from '../../tests/server/routes/jwt-test-secret'
import { Request, Response } from 'express';

export default {
  issue,
  getSecret
}

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

export function getSecret (req: Request, payload, done: (error: any, secret: string) => void) {
  const secret = process.env.JWT_SECRET || jwtTestSecret
  done(null, secret)
}