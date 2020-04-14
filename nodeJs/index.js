const express = require('express');

const { mongoose } = require('./db');
const employeeController = require('./controller/employeeController');

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome all')
    console.log('get route working');
})

app.listen('3000', () => {
    console.log('app running live at localhost:3000');
})

app.use('/employees', employeeController)

