
exports.up = function (knex, Promise) {
      return knex.schema.createTableIfNotExists('teacher', function (table) {
          table.increments('id').primary();
          table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
          table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
          table.string('name').notNullable();  
          table.string('initials').notNullable();                
          table.string('status').notNullable();
          table.integer('classroom_id').notNullable();
          table.foreign('classroom_id').references('classroom.id')
      })
  };
  
  exports.down = function (knex, Promise) {
      return knex.schema.dropTable('teacher') // drop table when reverting
  };
