const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const comment = require('../controllers/commentController')

      app.get('/comments/:id', (req, res) => {
            comment.getComments(req.params.id).then((comments) => { res.send(comments) })
      })
      
      app.post('/comments', (req, res) => {      
            comment.createComments(req.body)
            .then((comments)=>{res.send(commentsattributes)})
            
                  })
      app.delete('/comments/:id', (req, res) => {
            comment.deleteComments(req.params.id).then((comments) => {
                  res.send('Deleted')
            })
      })

} 