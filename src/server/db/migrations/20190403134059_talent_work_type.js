
exports.up = function(knex, Promise) {
  return knex.schema.createTable('talent_work_type', table => {
    table.increments('id').primary()
    table.integer('work_type_id').references('work_types.id')
    table.integer('talent_id').references('talents.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('talent_work_type')
};
