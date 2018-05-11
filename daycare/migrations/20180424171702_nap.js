
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('nap', function (table) {
    table.increments('id').primary();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.time('startTime').notNullable();
    table.time('stopTime').notNullable();
    table.integer('report_id').notNullable();
    table.foreign('report_id').references('report.id');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('nap') // drop table when reverting
};