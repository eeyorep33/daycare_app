
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('teachers').insert([
        { name: 'Alisha', room:1, initials:'AS', status:'out'},
        { name: 'Alexis', room:2, initials:'AL', status:'out'},
        { name: 'Kim', room:3, initials:'KH', status:'out'}
      ]);
    });
};
