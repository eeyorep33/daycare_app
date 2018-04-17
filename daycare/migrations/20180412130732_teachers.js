
exports.up = function (knex, Promise) {
      return knex.schema.createTableIfNotExists('teacherr', function (table) {
          table.increments('id').primary();
          table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
          table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
          table.string('name').notNullable();  
          table.string('initials').notNullable();                
          table.string('status').notNullable();
          table.integer('room').notNullable()
      })
  };
  
  exports.down = function (knex, Promise) {
      return knex.schema.dropTable('teacher') // drop table when reverting
  };
