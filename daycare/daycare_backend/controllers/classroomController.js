const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Classroom = bookshelf.Model.extend({
      tableName: 'classroom',
      student: function () {
            return this.hasMany(Student)
      },
      teacher: function () {
            return this.hasMany(Teacher)
      }
})
const Student = bookshelf.Model.extend({
      tableName: 'student',
      classroom: function () {
            return this.belongsTo('Classroom')
      },
      teacher: function () {
            return this.belongsToMany('Teacher')
      }
})
exports.getClassrooms = () => {
      return Classroom.fetchAll()
            .then(result => {
                  const classroom = result.models.map(classroom => {
                        return classroom.attributes
                  })
                  return classroom
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.getStudentsByClass = (key) => {
      return Classroom.where({ id: key }).fetch({
            withRelated: 'student'
      })
            .then(classroom => {
                  const students = classroom.related('student')
                  console.log(students)
                  console.log(classroom.models.map(student => {
                        studentList.attributes
                  }))
                  return classroom
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.createClassroom = (classroom) => {
      const newClassroom = new Classroom(
            classroom)
      return newClassroom.save()
            .then(classroom => {
                  return classroom;
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.deleteClassroom = (id) => {
      return new Classroom({ id: id })
            .destroy()
            .then(result => {
                  console.log('Classroom deleted')
            })
            .catch(err => {
                  console.log(err)
            })
}
