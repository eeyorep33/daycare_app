
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        { name:'Evelyn', classroom_id:6, status:'out', email:'kenpendlebury@gmail.com'},
        { name:'Amanda', classroom_id:7, status:'out', email:'susanpendlebury@gmail.com'},
        { name:'Matthew', classroom_id:8, status:'out', email:'eeyorep33@gmail.com'}
      ]);
    });
};

