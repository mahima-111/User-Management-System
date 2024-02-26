const User=require('../models/User');

const createUser=async (req,res)=>{
    try{
        const data=req.body;
        const newUser=new User(data);
        await newUser.save();
        res.status(200).json({message: 'added to db'});
    }
    catch(err){
        res.status(400).json({error: err});
    }
}
const getAllUsers=async (req,res)=>{
    try{
        const userList=await User.find();
        res.status(200).json(userList);
    }
    catch(err){
        res.status(400).json({error: err});
    }
}
const getOneUser=async (req,res)=>{
    try{
        const id=req.params.id;
        const userOne=await User.find({_id:id});
        res.status(200).json(userOne[0]);
    }
    catch(err){
        res.status(400).json({error: err});
    }
}
const updateUser=async (req,res)=>{
    try{
        const id=req.params.id;
        const data=req.body;
        const updatedUser=await User.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        });
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(400).json({error: err});
    }
}
const deleteUser=async (req,res)=>{
    try{
        const id=req.params.id;
        const deletedUser=await User.findByIdAndDelete(id);
        res.status(200).json({message: 'user delete successful'});
    }
    catch(err){
        res.status(400).json({error: err});
    }
}

module.exports={
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
};