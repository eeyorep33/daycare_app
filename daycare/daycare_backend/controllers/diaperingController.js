const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Diapering = bookshelf.Model.extend({
      tableName: 'diapering',
      report: function () {
            return this.belongsTo(Report)
      },
})
exports.getDiapering = (id) => {
      return Diapering.where(id).fetchAll()
            .then(result => {
                  const diaper = result.models.map(diap => {
                        return diap.attributes
                  })
                  return diaper
            })
}
exports.createDiapering = (diaper) => {
      console.log('function accessed')
      const newDiaper = new Diapering(
            diaper)
      return newDiaper.save()
            .then(diap => {
                  return diap;
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.deleteDiapering = (id) => {
      return new Diapering(id)
            .destroy()
            .then(result => {

            })
            .catch(err => {
                  console.log(err)
            })
}
