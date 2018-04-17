
exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('playTime', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('type').notNullable();
        table.string('activity').notNullable();
        table.integer('report_id').references('id').inTable('report')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('playTime') // drop table when reverting
};