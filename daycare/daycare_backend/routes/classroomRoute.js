const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const classroom = require('../controllers/classroomController')

      app.get('/classroomList', (req, res) => {
            classroom.getClassrooms().then((classrooms) => { res.send(classrooms) })
      })
      
      app.post('/classroomList', (req, res) => {
            classroom.createClassroom(req.body)
                  .then((classroom) => { res.send(classroom.attributes) })

      })
      app.delete('/classroomList/:id', (req, res) => {
            classroom.deleteClassroom(req.params.id).then((classroom) => {
                  res.send(req.params.id)
            })
      })
      app.put('/editClassroom/:id',(req,res)=>{
            classroom.editClassroom(req.params.id, req.body)
.then((classroom)=>{res.send (classroom.attributes)})
})

} 