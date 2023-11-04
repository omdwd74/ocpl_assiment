const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const secretKey = 'omji-dwivedi-btech-third-year'; 

// const dbUrl = process.env.DB_URL;
const dbUrl = 'mongodb://localhost:27017/yelp-camp';

mongoose.connect('dbUrl', { useNewUrlParser: true, useUnifiedTopology: true });
const db= mongoose.connection;
db.on("error",console.error.bind(console,"connnection error"));
db.once("open",()=>{
    console.log("Database connected");

})

app.use(bodyParser.json());

app.use()
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
