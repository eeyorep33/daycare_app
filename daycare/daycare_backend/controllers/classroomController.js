const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Classroom = bookshelf.Model.extend({
      tableName: 'classroom',
      students: function() {
            return this.hasMany('Student')
      },    
      teacher: function(){
            return this.hasMany('Teacher')
      }  
})

exports.getStudents = () => {
      return Students.fetchAll()
            .then(result => {
                  const students = result.models.map(student => {
                        return student.attributes
                  })
                  return students
            })
            .catch(err => {
                  console.log(err)
            })
            exports.createStudent=(student)=>{
                  const newStudent= new Students(
                  student)
                  return newStudent.save()
                  .then(student => {
                        return student;
                  })
                  .catch(err => {
                        console.log(err)
                  })
      }
      exports.deleteStudent=(key)=>{
            return new Students(key)
            .destroy()
            .then(result=>{
            
            })
            .catch(err=>{
                  console.log(err)
            })
                  }
            }