
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teacher').del()
    .then(function () {
      // Inserts seed entries
      return knex('teacher').insert([
        { name: 'Alisha', classroom_id:7, initials:'AS', status:'out'},
        { name: 'Alexis', classroom_id:8, initials:'AL', status:'out'},
        { name: 'Kim', classroom_id:9, initials:'KH', status:'out'}
      ]);
    });
};



