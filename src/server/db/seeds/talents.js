exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('talents').del()
    .then(function () {
      // Inserts seed entries
      return knex('talents').insert([
        {id: 1, user_id: 1, title: 'Violinist for all your concert needs', description: 'I am amazing', location: 'Paris', listedDate: new Date(), availability: 'Friday afternoons', payRate: 300},
        {id: 2, user_id: 1, title: 'Draw your beautiful children', description: 'I am professional', location: 'Paris', listedDate: new Date(), availability: 'Saturday mornings', payRate: 500}
      ]);
    });
};
