
exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('classroom', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('name').notNullable();

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('classroom') // drop table when reverting
};





