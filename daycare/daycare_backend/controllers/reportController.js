const knexConfig = require('../../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
const Reports = bookshelf.Model.extend({
      tableName: 'report',
      feeding: function () {
            return this.hasMany(Feeding)
      },
      diapering: function () {
            return this.hasMany(Diapering)
      },
      nap: function () {
            return this.hasMany(Nap)
      },
      meds: function () {
            return this.hasMany(Meds)
      },
      comment: function () {
            return this.hasMany(Com)
      },
      playTime: function () {
            return this.hasMany(Play)
      },
      supplies: function () {
            return this.hasMany(Supplies)
      },

})
const Feeding = bookshelf.Model.extend({
      tableName: 'feeding',
      report: function () {
            return this.belongsTo('Report')
      },
})
const Com = bookshelf.Model.extend({
      tableName: 'comment',
      report: function () {
            return this.belongsTo('Report')
      },
})
const Diapering = bookshelf.Model.extend({
      tableName: 'diapering',
      report: function () {
            return this.belongsTo('Report')
      },
})
const Supplies = bookshelf.Model.extend({
      tableName: 'supplies',
      report: function () {
            return this.belongsTo(Report)
      },
})
const Play = bookshelf.Model.extend({
      tableName: 'playTime',
      report: function () {
            return this.hasMany(Report)
      },
})
const Nap = bookshelf.Model.extend({
      tableName: 'nap',
      report: function () {
            return this.belongsTo(Report)
      },
})
const Meds = bookshelf.Model.extend({
      tableName: 'meds',
      students: function () {
            return this.belongsTo(Report)
      },
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
exports.getReport = (id,date) => {
            return Reports.where(id, date)
            .fetch({
                  withRelated: ['feeding', 'comment', 'diapering', 'nap', 'meds', 'playTime', 'supplies']
            })
            .then(report => {
                  console.log(report.attributes)
                  const meds = report.related('meds')
                  const nap = report.related('nap')
                  const feeding = report.related('feeding')
                  const diapering = report.related('diapering')
                  const supplies = report.related('supplies')
                  const playTime = report.related('playTime')
                  const comm = report.related('comment')
                  
                  const medsList = meds.map(med => {
                        return med.attributes
                  })
                  const napList = nap.map(n => {
                        return n.attributes
                  })
                  const feedingList = feeding.map(feed => {
                        return feed.attributes
                  })
                  console.log(feedingList)
                  const diaperList = diapering.map(diaper => {
                        return diaper.attributes
                  })
                  const suppliesList = supplies.map(supply => {
                        return supply.attributes
                  })
                  const playTimeList = playTime.map(play => {
                        return play.attributes
                  })
                  const commentList = comm.map(com => {
                        return com.attributes
                  })
                   return [feedingList, commentList, napList, playTimeList, suppliesList, diaperList, medsList, report.attributes]
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
                  return reports
            })
            .catch(err => {
                  console.log(err)
            })
}
