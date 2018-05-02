const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Comment = bookshelf.Model.extend({
      tableName: 'comment',
      report: function () {
            return this.belondsTo(Report)
      },
      
})


      exports.getComments = (id) => {
        return Comment.where(id).fetchAll()
              .then(result => {
                    const comments = result.models.map(com => {
                          return com.attributes
                    })
                    return comments
  
              })
  }
      exports.createComments = (comment) => {
            console.log('function accessed')
            const newComment = new Comment(
                  comment)
            return newClassroom.save()
                  .then(com => {
                        return com;
                  })
                  .catch(err => {
                        console.log(err)
                  })
      }
      exports.deleteComments = (id) => {
            return new Comment(id)
                  .destroy()
                  .then(result => {

                  })
                  .catch(err => {
                        console.log(err)
                  })
      }
