import Knex from 'knex'
import connection from './index'
import { generateHash } from '../auth/hash'
import {User } from '../types'

export async function signUpUser(user: User, db: Knex = connection) {
  const hash = await generateHash(user.password)
  const [id] = await insertUser(user.email, hash, db)
  await insertProfile(id, user, db)
  return id
}

export function insertUser(email: string, hash: string, db: Knex) {
  return db('users')
      .insert({
        email,
        hash
      })
}

export function insertProfile(id: number, user: User, db: Knex) {
  return db('profiles')
    .insert({
      user_id: id,
      first_name: user.firstName,
      last_name: user.lastName
    })
}

export function getUser(user: User, db: Knex = connection) {
  return db('users')
    .where({
      email: user.email
    })
    .first()
}

export default {
  signUpUser,
  getUser,
  insertUser,
  insertProfile
}

