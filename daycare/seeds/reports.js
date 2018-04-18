
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('report').del()
    .then(function () {
      // Inserts seed entries
      return knex('report').insert([
        {

          student_id: 1,
          classroom_id: 1,
          date: '2/6/18',

        },
        {

          student_id: 2,
          classroom_id: 2,
          date: 2 / 8 / 18


        },
        {

          student_id: 3,
          classroom_id: 3,
          date: 3 / 6 / 17
        }
      ])



    })







}   