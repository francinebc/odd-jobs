
exports.up = function(knex, Promise) {
  return knex.schema.createTable('job_work_type', table => {
    table.increments('id').primary()
    table.integer('work_type_id').references('work_types.id')
    table.integer('job_id').references('jobs.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('job_work_type')
};
