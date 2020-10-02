const express = require('express');
const app = express();
const port = 3000;
var budgetData = require("./budget-data.json");

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.get('/budget', (req, res) => {
    res.json(budgetData);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});