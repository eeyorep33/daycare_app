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
exports.editClassroom = (id, body) => {
      const fieldsToUpdate = { name: body.name }
      return new Classroom({ id: id })
            .save(fieldsToUpdate)
            .then(saved => {
                  return saved
            }).catch(err => {
                  console.log(err)
            })
}
