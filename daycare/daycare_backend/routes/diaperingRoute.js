const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const diaper = require('../controllers/diaperingController')

      app.get('/diapering/:id', (req, res) => {
            diaper.getDiapering(req.params.id).then((diapers) => { res.send(diapers) })
      })
      app.post('/diapering', (req, res) => {
            diaper.createDiapering(req.body)
                              .then((diapers) => {res.send(diapers.attributes) })
      })
      app.delete('/diapering/:id', (req, res) => {
            diaper.deleteDiapering(req.params.id).then((diapers) => {
                  res.send('Deleted')
            })
      })
} 