const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const meds = require('../controllers/medsController')

      app.get('/meds/:id', (req, res) => {
            meds.getMeds(req.params.id).then((med) => { res.send(med) })
      })
      app.post('/meds', (req, res) => {
            meds.createMeds(req.body)
                  .then((med) => { res.send(med.attributes) })
      })
      app.delete('/meds/:id', (req, res) => {
            meds.deleteMeds(req.params.id).then((med) => {
                  res.send('Deleted')
            })
      })
} 