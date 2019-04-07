
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('job_work_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('job_work_type').insert([
        {id: 1, job_id: 1, work_type_id: 1},
        {id: 2, job_id: 2, work_type_id: 3}
      ]);
    });
};
