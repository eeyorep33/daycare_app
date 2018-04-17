const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Teacher = bookshelf.Model.extend({
      tableName: 'teachers',
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
            exports.createTeacher=(teacher)=>{
                  const newTeacher= new Teacher(
                  teacher)
                  return newTeacher.save()
                  .then(teacher => {
                        return teacher;
                  })
                  .catch(err => {
                        console.log(err)
                  })
      }   
      exports.deleteTeacher=(key)=>{
return new Teacher(key)
.destroy()
.then(result=>{

})
.catch(err=>{
      console.log(err)
})
      }
}