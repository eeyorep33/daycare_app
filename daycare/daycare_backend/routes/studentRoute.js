const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const students = require('./controllers/studentController')

      app.get('/students', (req, res) => {
            students.getStudents().then((students) => { res.send(students) })
      })
      app.post('students', (req, res) => {
            students.createStudent().then((student) => {

            })
      })
      app.delete('/students/:id', (req, res) => {
            students.deletestudent(req.params.id).then((student) => {
                  res.send('Deleted')
            })
      })

} 
