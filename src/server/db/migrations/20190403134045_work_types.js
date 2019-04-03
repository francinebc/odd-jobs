
exports.up = function(knex, Promise) {
  return knex.schema.createTable('work_types', table => {
    table.increments('id').primary()
    table.string('title')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('work_types')
};
