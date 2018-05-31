const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Student = bookshelf.Model.extend({
      tableName: 'student',
      classroom: function () {
            return this.belongsTo('Classroom')
      },
      teacher: function () {
            return this.belongsToMany('Teacher')
      }
})
exports.getStudents = () => {
      return Student.fetchAll()
            .then(result => {
                  const students = result.models.map(student => {
                        return student.attributes
                  })
                  return students
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.getStudentByClass = (id) => {
      return Student.where(id).fetchAll()
            .then(result => {
                  const students = result.models.map(student => {
                        return student.attributes
                  })
                  return students
            })
}
exports.createStudent = (student) => {
      const newStudent = new Student(
            student)
      return newStudent.save()
            .then(student => {
                  return student;
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.deleteStudent = (key) => {
      console.log(key)
      return new Student({ id: parseInt(key) })
            .destroy()
            .then(result => {

            })
            .catch(err => {
                  console.log(err)
            })
}
exports.editStatus = (id) => {
      console.log(id)
      const fieldToUpdate = { status: 'in' }
      return new Student({ id: id })
            .save(fieldToUpdate)
            .then(saved => {
                  return saved;
            }).catch(err => {
                  console.log(err)
            })
}
exports.studentCheckOut = (id) => {
      console.log(id)
      const fieldToUpdate = { status: 'out' }
      return new Student({ id: id })
            .save(fieldToUpdate)
            .then(saved => {
                  return saved;
            }).catch(err => {
                  console.log(err)
            })
}
exports.editStudent=(id, body)=>{
const fieldsToUpdate={name:body.name, email:body.email}
return new Student ({id:id})
.save(fieldsToUpdate)
.then(saved=>{
      return saved
}).catch(err=>{
      console.log(err)
})
}

