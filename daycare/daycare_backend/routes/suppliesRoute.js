const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const supply = require('../controllers/suppliesController')

      app.get('/supplies/:id', (req, res) => {
            supply.getSupplies(req.params.id).then((supplies) => { res.send(supplies) })
      })
      
      app.post('/supplies', (req, res) => {      
            supply.createSupply(req.body)
            .then((supplies)=>{res.send(supplies.attributes)})
            
                  })
      app.delete('/supplies/:id', (req, res) => {
            supply.deleteSupply(req.params.id).then((supplies) => {
                  res.send('Deleted')
            })
      })

} 