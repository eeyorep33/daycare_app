const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Teacher = bookshelf.Model.extend({
      tableName: 'teacher',
      classroom: function () {
            return belongsTo('Classroom')
      },
      students: function () {
            return hasMany('Student')
      }
})
exports.getTeachers = () => {
      return Teacher.fetchAll()
            .then(result => {
                  const teachers = result.models.map(teacher => {
                        return teacher.attributes
                  })
                  return teachers
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.deleteTeacher = (key) => {
      return new Teacher({ id: parseInt(key) })
            .destroy()
            .then(result => {

            })
            .catch(err => {
                  console.log(err)
            })
}
exports.createTeacher = (teacher) => {
      const newTeacher = new Teacher(
            teacher)
      return newTeacher.save()
            .then(teacher => {
                  return teacher;
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.teacherCheckIn = (id) => {
      console.log(id)
      const fieldToUpdate = { status: 'in' }
      return new Teacher({ id: id })
            .save(fieldToUpdate)
            .then(saved => {
                  return saved;
            }).catch(err => {
                  console.log(err)
            })
}
exports.teacherCheckOut = (id) => {
      console.log("hello", id)
      const fieldToUpdate = { status: 'out' }
      return new Teacher({ id: id })
            .save(fieldToUpdate)
            .then(saved => {
                  return saved;
            }).catch(err => {
                  console.log(err)
            })
}

