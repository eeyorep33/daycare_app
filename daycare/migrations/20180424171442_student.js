
exports.up = function (knex, Promise) {
    return knex.schema.createTableIfNotExists('student', function (table) {
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('name').notNullable();
        table.string('status').notNullable();
        table.string('email').notNullable();
        table.integer('classroom_id').notNullable();
        table.foreign('classroom_id').references('classroom.id')

    }).createTable('student_teacher', function (table) {
        table.integer('student_id').notNullable;
        table.foreign('student_id').references('student.id');
        table.integer('teacher_id').notnullable;
        table.foreign('teacher_id').references('teacher.id')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('student') // drop table when reverting
}

