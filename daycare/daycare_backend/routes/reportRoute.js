const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const report = require('../controllers/reportController')

      app.post('/report', (req, res) => {
            report.createReport(req.body).then((report) => {
                  res.send(report.attributes)
            })
      })
      app.get('/reports/:id', (req, res) => {
            report.getReportByName({ student_id: req.params.id }).then((report) => {
                  res.send(report)
            })
      })
      app.get('/getReports/:month/:day/:year/:id', (req, res) => {
            report.getReport({ student_id: req.params.id, date: req.params.month + '/' + req.params.day + '/' + req.params.year }).then((report) => {
                  res.send(report)
            })
      })

}