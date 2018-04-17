
exports.up = function (knex, Promise) {
      return knex.schema.createTableIfNotExists('student', function (table) {
          table.increments('id').primary();
          table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
          table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
          table.string('name').notNullable();
          table.integer('room').notNullable();
          table.string('status').notNullable();
          table.string('email').notNullable();
         
      })
  };
  
  exports.down = function (knex, Promise) {
      return knex.schema.dropTable('student') // drop table when reverting
  };