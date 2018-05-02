const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Meds = bookshelf.Model.extend({
      tableName: 'meds',
      students: function () {
            return this.belongsTo(Report)
      },
     
})


      exports.get = (id) => {
        return Meds.where(id).fetchAll()
              .then(result => {
                    const meds = result.models.map(med => {
                          return med.attributes
                    })
                    return meds
  
              })
  }
      exports.createMeds = (med) => {
            console.log('function accessed')
            const newMed = new Meds(
                  med)
            return newMed.save()
                  .then(me => {
                        return me;
                  })
                  .catch(err => {
                        console.log(err)
                  })
      }
      exports.deleteMeds = (id) => {
            return new Meds(id)
                  .destroy()
                  .then(result => {

                  })
                  .catch(err => {
                        console.log(err)
                  })
      }
