//Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
var budgetData = require("./budget-data.json");

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const chartModel = require('./models/chart_schema');
let url = 'mongodb://localhost:27017/personal-budget';

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());

app.use(cors());

app.get('/newbudgetitem', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
        chartModel.find({})
                .then((data)=>{
                    res.json(data);
                    mongoose.connection.close()
                })
                .catch((connectionError)=>{
                    console.log(connectionError)
                })
});

app.post('/newbudgetitem', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                chartModel.insertMany(req.body)
                          .then((data)=>{
                              res.json(data);
                              mongoose.connection.close();
                          })
                          .catch((connectionError)=>{
                              console.log(connectionError);
                          });
            });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});