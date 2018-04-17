
exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('supplies', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('supply_item').notNullable();
        table.integer('report_id').references('id').inTable('report')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('supplies') // drop table when reverting
};