const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const nap = require('../controllers/napController')

      app.get('/nap/:id', (req, res) => {
            nap.getNap(req.params.id).then((naps) => { res.send(naps) })
      })
      
      app.post('/nap', (req, res) => {      
            nap.createNap(req.body)
            .then((naps)=>{res.send(naps.attributes)})
            
                  })
      app.delete('/nap/:id', (req, res) => {
            nap.deleteNap(req.params.id).then((naps) => {
                  res.send('Deleted')
            })
      })

} 