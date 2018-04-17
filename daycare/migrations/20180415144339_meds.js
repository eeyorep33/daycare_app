
exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('meds', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('time').notNullable();
        table.string('name').notNullable();
        table.string('amount').notNullable();
        table.integer('report_id').references('id').inTable('report')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('meds') // drop table when reverting
};