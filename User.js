const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        
        id:Number,
        name: String,
        mail: String,
        password: String,
        phone: String,   
        location: String
        
        
});

module.exports = mongoose.model("users", userSchema);
