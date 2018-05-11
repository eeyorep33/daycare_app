const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Supplies = bookshelf.Model.extend({
      tableName: 'supplies',
      report: function () {
            return this.belongsTo(Report)
      },
})
exports.getSupplies = (id) => {
      return Supplies.where(id).fetchAll()
            .then(result => {
                  const supplies = result.models.map(sup => {
                        return sup.attributes
                  })
                  return supplies
            })
}
exports.createSupply = (supply) => {
      console.log('function accessed')
      const newSupply = new Supplies(
            supply)
      return newSupply.save()
            .then(supply => {
                  return supply;
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.deleteSupply = (id) => {
      return new Supplies(id)
            .destroy()
            .then(result => {

            })
            .catch(err => {
                  console.log(err)
            })
}
