import * as request from "superagent"
import { SignUpUser } from '../utils/types'

const url = 'http://localhost:3000/api/v1/auth'

export function signUp (user: SignUpUser) {
  return request
    .post(`${url}/signUp`)
    .send(user)
    .then(res => res.body)
}