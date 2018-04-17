const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
module.exports = (app) => {
      const report = require('./controllers/reportController')

      app.post('/report', (req, res) => {
           report.createReport(req.body).then((report) => {
                  
            })
      })
      app.get('/report/:id', (req, res) => {
            report.getReport({ id: req.params.id }).then((report) => {
                  res.send(report)
            })
      })
app.post('/diapering'),(req,res) =>{
      report.createDiapering(req.body).then((report) =>{

      })
}
app.post('/feeding'),(req,res) =>{
      report.createFeeding(req.body).then((report) =>{
            
      })
}
app.post('/nap'),(req,res) =>{
      report.createNap(req.body).then((report) =>{
            
      })
}
app.post('/meds'),(req,res) =>{
      report.createMeds(req.body).then((report) =>{
            
      })
}
app.post('/supplies'),(req,res) =>{
      report.createSupplies(req.body).then((report) =>{
            
      })
}
app.post('/comment'),(req,res) =>{
      report.createComment(req.body).then((report) =>{
            
      })
      app.post('/playtime'),(req,res) =>{
            report.createPlaytime(req.body).then((report) =>{
                  
            })
      }
}


} 