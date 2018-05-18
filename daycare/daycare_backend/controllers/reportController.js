const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Reports = bookshelf.Model.extend({
      tableName: 'report',
      feedings: function () {
            return this.hasMany('Feeding')
      },
      teacher: function () {
            return this.hasMany('Diapering')
      },
      nap: function () {
            return this.hasMany('Nap')
      },
      meds: function () {
            return this.hasMany('Meds')
      },
      comments: function () {
            return this.hasMany('Comment')
      },
      playTime: function () {
            return this.hasMany('PlayTime')
      },
      supplies: function () {
            return this.hasMany('Supplies')
      }
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
            .fetch({
                  withRelated: ['feeding', 'diapering', 'nap', 'meds', 'playTime', 'comment', 'supplies']
            })
            .then(report => {
                  return report
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.getReportByName = (id) => {
      return Reports.where(id).fetchAll()
            .then(result => {
                  const reports = result.models.map(report => {
                        return report.attributes
                  })
                  console.log(reports)
                  return reports
            })
            .catch(err => {
                  console.log(err)
            })
}
exports.getReportByDate = (date) => {
      return Reports.where(date).fetchAll()
            .then(result => {
                  const reports = result.models.map(report => {
                        return report.attributes
                  })
                  console.log(reports)
                  return reports
            })
            .catch(err => {
                  console.log(err)
            })
}
