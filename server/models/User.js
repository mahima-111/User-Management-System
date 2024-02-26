const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    // id:{
    //     type:Number,
    //     required:true,
    //     unique:true,
    // },
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
        enum:['female','male'],
        default: 'female'
    },
    status:{
        type:String,
        required:true,
        enum:['inactive','active'],
        default: 'inactive'
    },
});

const User=mongoose.model('User',userSchema);
module.exports=User;