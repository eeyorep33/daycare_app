const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const students = require('./routes/studentRoute')
const teachers = require('./routes/teacherRoute')
const report = require('./routes/reportRoute')
const classroom = require('./routes/classroomRoute')
const feed = require('./routes/feedingRoute')
const nap = require('./routes/napRoute')
const med = require('./routes/medsRoute')
const play = require('./routes/playTimeRoute')
const diaper = require('./routes/diaperingRoute')
const com = require('./routes/commentRoute')
const supply = require('./routes/suppliesRoute')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE, OPTIONS")
    next();
});
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});

students(app)
teachers(app)
report(app)
classroom(app)
feed(app)
nap(app)
play(app)
com(app)
supply(app)
diaper(app)
med(app)

