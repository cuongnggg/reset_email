const express = require("express");
const bodyParser = require('body-parser');
const sendEmailRoute = require('./routes/sendEmail.js');
const path = require('path');
const app = express();
const PORT = 3500;
const  MongoClient = require ('mongodb').MongoClient;
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(),'views'));
app.use(bodyParser.json());

MongoClient.connect('mongodb://hsdev:hsdev1234@mongo.likequiz.com:27017/hsdev', (err, db) => {
    if(!err){
        console.log("Connected to database");
    }
});

// app.use('/users', usersRoutes);
app.use('/send-email', sendEmailRoute);


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
