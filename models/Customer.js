const mongoose = require('mongoose');

const CustomerSchema =new mongoose.Schema( {
  email:{
    type:String,
    unique:true

  }
});

module.exports = mongoose.model('Customer', CustomerSchema);