
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('talent_work_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('talent_work_type').insert([
        {id: 1, talent_id: 1, work_type_id: 1},
        {id: 2, talent_id: 2, work_type_id: 2}
      ]);
    });
};

