const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const classroom = require('./controllers/classroomController')

      app.get('/classroomList', (req, res) => {
            classroom.getClassrooms().then((classrooms) => { res.send(classrooms) })
      })
      app.post('classroomList', (req, res) => {
            classroom.createClassroom().then((classroom) => {

            })
      })
      app.delete('/classroomList/:id', (req, res) => {
            classroom.deleteclassroom(req.params.id).then((classroom) => {
                  res.send('Deleted')
            })
      })

} 