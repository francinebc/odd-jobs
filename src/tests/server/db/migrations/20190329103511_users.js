exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('hash')
    table.string('email').unique()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}