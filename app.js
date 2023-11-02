const express =  require('express');
const app  = express();
const path = require('path');
const dotenv  = require('dotenv');
const jwt = require('jsonwebtoken');
const User =  require('./models/User');


dotenv.config();
let PORT  =  process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send('<h1>omji</h1>')
})
app.listen(PORT,()=>{
    console.log('connected');

})