const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Reports = bookshelf.Model.extend({
      tableName: 'report',
      
})
exports.createReport = (report) => {
      const newReport = new Reports(
            report)
      return newReport.save()
            .then(report => {
                  return report;
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.getReport = (id) => {
      return Reports.where(id)
            .fetch()
            .then(report => {
                  return report
            })
            .catch(err => {
                  console.log(err)
            })
}