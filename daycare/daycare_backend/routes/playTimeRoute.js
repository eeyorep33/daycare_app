const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const playTime = require('../controllers/playTimeController')

      app.get('/playTime/:id', (req, res) => {
            playTime.getPlayTime(req.params.id).then((playtime) => { res.send(playtime) })
      })
      app.post('/playTime', (req, res) => {
            playTime.createPlaytime(req.body)
                  .then((playtime) => { res.send(playtime.attributes) })
      })
      app.delete('/playTime/:id', (req, res) => {
            playTime.delete(req.params.id).then((playtime) => {
                  res.send('Deleted')
            })
      })
} 