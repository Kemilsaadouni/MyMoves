const express = require("express");
const app = express();
const config = require('./database');
const bodyParser = require('body-parser')
const cors = require('cors');
const users = require('./routes/users.js')
const movies = require('./routes/movies.js')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/", users, movies)

app.listen(3000, function (){
    console.log('App listen on port 3000');
    config.connect(function(err){
        if(err) throw (err);
        console.log('Database is connect');
    })
});