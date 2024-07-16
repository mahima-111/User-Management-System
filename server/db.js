const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log("mongo db connected");
})
db.on('error',()=>{
    console.log("error connecting to mongo db");
})
db.on('disconnected',()=>{
    console.log("mongo db disconnected");
})
module.exports=db;