exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {id: 1, user_id: 2, title: 'Violinist needed for concert', description: 'Play for St. Mary jubilee', location: 'Paris', listedDate: new Date(), availability: 'Friday afternoon', payRate: 300},
        {id: 2, user_id: 2, title: 'DJ for wedding', description: 'laid back wedding', location: 'Paris', listedDate: new Date(), availability: 'Saturday morning', payRate: 500}
      ]);
    });
};
