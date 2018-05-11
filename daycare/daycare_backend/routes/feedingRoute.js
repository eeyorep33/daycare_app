const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const feeding = require('../controllers/feedingController')

      app.get('/feeding/:id', (req, res) => {
            feeding.getFeeding(req.params.id).then((feedings) => { res.send(feedings) })
      })
      app.post('/feeding', (req, res) => {
            feeding.createFeeding(req.body)
                  .then((feedings) => { res.send(feedings.attributes) })
      })
      app.delete('/feeding/:id', (req, res) => {
            feeding.deleteFeeding(req.params.id).then((feedings) => {
                  res.send('Deleted')
            })
      })
} 