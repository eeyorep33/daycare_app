
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('report', function (table) {
    table.increments('id').primary();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.date('date').notNullable();
    table.integer('student_id').notNullable();
    table.foreign('student_id').references('student.id')
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('report') // drop table when reverting
};