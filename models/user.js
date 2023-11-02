const mongoose  = require('mongoose')
const express =  require('express');
const app = express();


const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'NOT blank'],
        
    },
    phone:{
        type:Number,
        required:[true, 'Can\'t be blank'],
        
    },
    email:{
        type:String,
        require:[true,'not blank'],
     
    }


})
module.exports  = mongoose.model('User',userSchema);

