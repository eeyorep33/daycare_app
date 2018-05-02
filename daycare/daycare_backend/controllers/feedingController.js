const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Feeding= bookshelf.Model.extend({
      tableName: 'feeding',
      report: function () {
            return this.belongsTo(Report)
      },
     
})


      exports.getFeeding = (id) => {
        return Feeding.where(id).fetchAll()
              .then(result => {
                    const feeding = result.models.map(feed => {
                          return feed.attributes
                    })
                    return feeding
  
              })
  }
      exports.createFeeding = (feeding) => {
            console.log('function accessed')
            const newFeeding = new Feeding(
                  feeding)
            return newFeeding.save()
                  .then(feed => {
                        return feed;
                  })
                  .catch(err => {
                        console.log(err)
                  })
      }
      exports.deleteFeeding = (id) => {
            return new Feeding(id)
                  .destroy()
                  .then(result => {

                  })
                  .catch(err => {
                        console.log(err)
                  })
      }
