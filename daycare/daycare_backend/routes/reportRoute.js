const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const report = require('../controllers/reportController')

      app.post('/report', (req, res) => {
            report.createReport(req.body).then((report) => {
                  res.send(report.attributes) })
      })
      app.get('/report/:id', (req, res) => {
            report.getReport({ id: req.params.id }).then((report) => {
                  res.send(report)
            })
      })
}