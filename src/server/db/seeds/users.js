
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'sam@gmail.com', hash: '$argon2id$v=19$m=8,t=2,p=1$vApdm+ihHezjMEMzOjOBQg$Yz09deasbyQKcMYSLZOtZgK/THsb8SowmMcbk1HpcF4'},
        {id: 2, email: 'jenny@gmail.com', hash: '$argon2id$v=19$m=8,t=2,p=1$LFVompOwVDmmtCY/C9X1jQ$EN0cZQs4xcyE1ToO9cuvFHoOKekAL4Wq6z8WeAR3Uoo'}
      ]);
    });
};
