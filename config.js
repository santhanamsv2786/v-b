const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/mongo").then(()=>{console.log("connected")}).catch((err)=>{console.log("error :"+err)})