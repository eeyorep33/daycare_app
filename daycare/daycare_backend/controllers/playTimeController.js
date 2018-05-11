const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Play = bookshelf.Model.extend({
      tableName: 'playTime',
      report: function () {
            return this.hasMany(Report)
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
exports.createPlaytime = (play) => {
      console.log('function accessed')
      const newPlayTime = new Play(
            play)
      return newPlayTime.save()
            .then(playtime => {
                  return playtime;
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.deletePlayTime = (id) => {
      return new Play(id)
            .destroy()
            .then(result => {

            })
            .catch(err => {
                  console.log(err)
            })
}
