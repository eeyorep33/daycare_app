const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const teachers = require('../controllers/teacherController')

      app.get('/teacherList', (req, res) => {
            teachers.getTeachers().then((teachers) => { res.send(teachers) })
      })
      app.post('/teacherList', (req, res) => {
            console.log('req received')
            console.log(req.body)
            teachers.createTeacher(req.body).then((teacher) => {
                  res.send('teacher created')
            })
      })
      app.delete('/teacherList/:id', (req, res) => {
            console.log('req received')
            console.log(req.params.id)
            teachers.deleteTeacher(req.params.id).then((teacher) => {
                  res.send(req.params.id)
            })
      })
}


