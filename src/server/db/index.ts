import * as knex from 'knex'
const knexfile = require('../../../knexfile')

const environment = 'development'

const config = knexfile[environment]
const connection = knex(config)

export default connection