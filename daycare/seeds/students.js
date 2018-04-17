
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name:'Evelyn', room:1, status:'out', email:'kenpendlebury@gmail.com'},
        { name:'Amanda', room:2, status:'out', email:'susanpendlebury@gmail.com'},
        { name:'Matthew', room:3, status:'out', email:'eeyorep33@gmail.com'}
      ]);
    });
};
