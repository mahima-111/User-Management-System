import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
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

    const navigate=useNavigate();

    const submitHandler=async (e)=>{
        e.preventDefault();
        try{
            await axios.post(import.meta.env.VITE_BACKEND_URL+'/user/create',userObj);
            toast.success('User added successfully'); 
            navigate('/');
        }
        catch(err){
            console.log(err);
            toast.error(`Error in adding user : ${err}`); 
        }
    }
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