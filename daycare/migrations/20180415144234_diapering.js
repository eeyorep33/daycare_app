
exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('diapering', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('time').notNullable();
        table.string('type').notNullable();
        table.string('initials').notNullable();
        table.integer('report_id').references('id').inTable('report')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('diapering') // drop table when reverting
};
