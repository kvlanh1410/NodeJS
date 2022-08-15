const mongoose = require('mongoose')
const addressSchema = new mongoose.Schema({
    city: {
        type: String,
         required: true
      
    }, 
    country:{
        type: String,
        required: true,
        
    },
    province: {
        type: String,
        required: true
    },
    Owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    }
})
const Address = mongoose.model("address", addressSchema)

module.exports = Address