exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('image')
    table.string('first_name')
    table.string('last_name')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
}