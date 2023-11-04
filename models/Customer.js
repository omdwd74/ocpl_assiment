const mongoose = require('mongoose');

const CustomerSchema = mongoose.model('User', {
  email:{
    type:String,
    unique:true

  },
  phone:{
    type:Number,
    required:true
  },
  password: String,
});

module.exports = mongoose.model('Customer', CustomerSchema);