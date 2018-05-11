const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const students = require('./routes/studentRoute')
const teachers = require('./routes/teacherRoute')
const report = require('./routes/reportRoute')
const classroom = require('./routes/classroomRoute')

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
