const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const teachers = require('../controllers/teacherController')

      app.get('/teacherList', (req, res) => {
            teachers.getTeachers().then((teachers) => { res.send(teachers) })
      })
      app.post('/teacherList', (req, res) => {
            teachers.createTeacher(req.body).then((teacher) => {
                  res.send('teacher created')
            })
      })
      app.delete('/teacherList/:id', (req, res) => {
            console.log(req.params.id)
            teachers.deleteTeacher(req.params.id).then((teacher) => {
                  res.send(req.params.id)
            })
      })
      app.put('/teacherCheckIn/:id', (req, res) => {
            console.log(req.params.id)
            teachers.teacherCheckIn(req.params.id)
                  .then((teacher) => { res.send(teacher.attributes.id) })

      })
      app.put('/teacherCheckOut/:id', (req, res) => {
                        teachers.teacherCheckOut(req.params.id)
                  .then((teacher) => { console.log(teacher.attributes),res.send(teacher.attributes.id) })

      })
}


