
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 1, image: '', first_name: 'sam', last_name: 'smith'},
        {id: 2, user_id: 2, image: '', first_name: 'jenny', last_name: 'lameny'}
      ]);
    });
};
