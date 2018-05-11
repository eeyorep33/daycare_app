
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('comment', function (table) {
    table.increments('id').primary();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.string('comment').notNullable();
    table.integer('report_id').notNullable();
    table.foreign('report_id').references('report.id');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('comment') // drop table when reverting
};