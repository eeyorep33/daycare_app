const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const classroom = require('../controllers/classroomController')

      app.get('/classroomList', (req, res) => {
            classroom.getClassrooms().then((classrooms) => { res.send(classrooms) })
      })
      app.get('/classroomList/:id',(req,res)=>{
            classroom.getStudentsByClass(req.params.id).then((student)=>{
                  res.send(student)
            })
      })
      
      app.post('/classroomList', (req, res) => {      
            classroom.createClassroom(req.body)
            .then((classroom)=>{res.send(classroom.attributes)})
            console.log(classroom.attributes)
                  })
      app.delete('/classroomList/:id', (req, res) => {
            console.log('req received')
            classroom.deleteClassroom(req.params.id).then((classroom) => {
                  res.send('Deleted')
            })
      })

} 