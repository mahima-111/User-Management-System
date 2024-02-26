import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import DisplayAddUser from "./DisplayAddUser";
const AddUser = () => {
    const [userObj,setUserObj]=useState({
        fname:'',
        lname:'',
        age:'',
        gender:'female',
        status:'inactive'
    });

    const submitHandler=async (e)=>{
        e.preventDefault();
        // console.log(userObj);
        try{
            await axios.post('http://localhost:5000/user/create',userObj);
            toast.success('User added successfully'); 
            // e.target.reset();
        }
        catch(err){
            console.log(err);
            toast.error(`Error in adding user : ${err}`); 
        }
    }
    // const resetForm = () => { 
    //     document.getElementById("user-add-form").reset();
    // }
    const inputHandler=(e)=>{
        const {value,name}=e.target;
        setUserObj({...userObj,[name]:value});
    }

    return (
    <div className="w-full min-h-[70vh] max-h-max flex justify-center items-center mt-12">
        <div className="bg-blue-300/20 border-2 rounded-md border-blue-500/60 p-4">
        <Link to='/'> 
            <button  className="flex gap-1 items-center">
            <span className="text-2xl"><IoArrowBack/></span>
            <span>Back</span>
            </button>
        </Link>
        <h2 className="font-semibold text-4xl text-center mb-8">Add New User</h2>
        
        <DisplayAddUser inputHandler={inputHandler} submitHandler={submitHandler}/> 
        
        </div>
        <Toaster position="top-right"
        reverseOrder={false} />
    </div>
    )
}

export default AddUser