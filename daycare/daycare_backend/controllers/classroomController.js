const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Classroom = bookshelf.Model.extend({
      tableName: 'classroom',
      students: function () {
            return this.hasMany(Student)
      },
      teacher: function () {
            return this.hasMany(Teacher)
      }
})

exports.getClassrooms = () => {
      return Classroom.fetchAll()
            .then(result => {
                  const classroom = result.models.map(classroom => {
                        return classroom.attributes
                        console.log(classroom.attributes)
                  })
                  return classroom
            })
            .catch(err => {
                  console.log(err)
            })
      }
      exports.getClassroomById = (id) => {
                           
            
                       return Classroom.where(id).fetch({
                  withRelated: ['student']
                 
            })
            .then(classroom =>{
                  console.log(classroom.attributes)
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
            return new Classroom(id)
                  .destroy()
                  .then(result => {

                  })
                  .catch(err => {
                        console.log(err)
                  })
      }
