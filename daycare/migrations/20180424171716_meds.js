
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('meds', function (table) {
    table.increments('id').primary();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.time('time').notNullable();
    table.string('name');
    table.string('amount');
    table.integer('report_id').notNullable();
    table.foreign('report_id').references('report.id');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('meds') // drop table when reverting
};
