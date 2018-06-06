const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Nap = bookshelf.Model.extend({
      tableName: 'nap',
      report: function () {
            return this.belongsTo(Report)
      },
})
exports.getNap = (id) => {
      return Nap.where(id).fetchAll()
            .then(result => {
                  const nap = result.models.map(na => {
                        return na.attributes
                  })
                  return nap
            })
}
exports.createNap = (nap) => {
      const newNap = new Nap(
            nap)
      return newNap.save()
            .then(na => {
                  return na;
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.deleteNap = (id) => {
      return new Nap(id)
            .destroy()
            .then(result => {

            })
            .catch(err => {
                  console.log(err)
            })
}
