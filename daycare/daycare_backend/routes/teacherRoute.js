const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const teachers = require('./controllers/teacherController')

      app.get('/teacherList', (req, res) => {
            teachers.getTeachers().then((teachers) => { res.send(teachers) })
      })
      app.post('/teacherList', (req, res) => {
            teahers.createTeacher().then((teacher) => {

            })
      })
      app.delete('/teacherList/:id', (req, res) => {
            teachers.deleteTeacher(req.params.id).then((teacher) => {
                  res.send('Deleted')
            })
      })

}


