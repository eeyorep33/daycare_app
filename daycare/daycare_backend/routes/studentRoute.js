const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const students = require('./controllers/studentController')

      app.get('/studentList', (req, res) => {
            students.getStudents().then((students) => { res.send(students) })
      })
      app.post('studentList', (req, res) => {
            students.createStudent().then((student) => {

            })
      })
      app.delete('/studentList/:id', (req, res) => {
            students.deletestudent(req.params.id).then((student) => {
                  res.send('Deleted')
            })
      })

} 
