const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const students = require('../controllers/studentController')

      app.get('/studentList', (req, res) => {
            students.getStudents().then((students) => { res.send(students) })
      })
      app.delete('/studentList/:id', (req, res) => {
            students.deleteStudent(req.params.id).then((student) => {
                  res.send(req.params.id)
            })
      })
      app.post('/studentList', (req, res) => {
            students.createStudent(req.body)
                  .then((student) => { res.send(student.attributes) })
      })
      app.put('/studentList/:id', (req, res) => {
            let response = { id: req.params.id, status: 'in' }
            students.editStatus(req.params.id)
                  .then((student) => { res.send(student.attributes.id) })
      })
      app.put('/studentCheckOut/:id', (req, res) => {                      
            students.studentCheckOut(req.params.id)
                  .then((student) => { res.send(student.attributes.id) })
      })
      app.put('/editStudent/:id',(req,res)=>{
                        students.editStudent(req.params.id, req.body)
            .then((student)=>{res.send (student.attributes)})
      })
} 
