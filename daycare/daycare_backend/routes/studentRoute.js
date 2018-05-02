const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const students = require('../controllers/studentController')

      app.get('/studentList', (req, res) => {
            students.getStudents().then((students) => { res.send(students) })
      })
     
      app.delete('/studentList/:id', (req, res) => {
            console.log('req received')
            students.deleteStudent(req.params.id).then((student) => {
                  res.send('Deleted')
            })
      })
      app.post('/studentList', (req, res) => {  
            console.log(req.body)    
            students.createStudent(req.body)
            
            
                  })
} 
