
exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('feeding', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('time').notNullable();
        table.string('food').notNullable();
        table.string('amount').notNullable();
        table.integer('report_id').references('id').inTable('report')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('feeding') // drop table when reverting
};
