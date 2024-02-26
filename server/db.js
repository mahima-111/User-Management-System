const mongoose=require('mongoose');
const URL='mongodb://127.0.0.1:27017/crudApp'

mongoose.connect(URL);
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