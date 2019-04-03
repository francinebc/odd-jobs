
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('title')
    table.string('description')
    table.string('location')
    table.date('listedDate')
    table.string('availability')
    table.string('payRate')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs')
};
