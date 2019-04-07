
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('work_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('work_types').insert([
        {id: 1, title: 'concert'},
        {id: 2, title: 'portrait'},
        {id: 3, title: 'dj'}
      ]);
    });
};
