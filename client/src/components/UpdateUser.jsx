import { useParams,useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios";
import { IoArrowBack } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import DisplayUpdateUser from "./DisplayUpdateUser";
const UpdateUser = () => {
    const navigate=useNavigate();
    const {userId}=useParams();
    const [userData,setUserData]=useState({});

    const FetchData= async()=>{
        try{
            const {data}=await axios.get(`http://localhost:5000/user/getone/${userId}`);
            setUserData(data);
            console.log(userData);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        FetchData();
    },[]);

    const submitHandler=async (e)=>{
        e.preventDefault();
        try{
            await axios.put(import.meta.env.VITE_BACKEND_URL+`/user/update/${userId}`,userData);
            toast.success('User updated successfully');
            navigate('/');
        }
        catch(err){
            // console.log(err);
            toast.error(`Error in updating user : ${err}`);
        }
    }
    const inputHandler=(e)=>{
        const {value,name}=e.target;
        setUserData({...userData,[name]:value});
    }
    
    return (
    <div className="w-full min-h-[70vh] max-h-max flex justify-center items-center mt-12">
        <div className="bg-blue-300/20 border-2 rounded-md border-blue-500/60 p-4">
        <Link to='/' > 
            <button  className="flex gap-1 items-center ">
            <span className="text-2xl"><IoArrowBack/></span>
            <span>Back</span>
            </button>
        </Link>
        <h2 className="font-semibold text-4xl text-center mb-8">Update User</h2>
        <form className="w-[70vw] flex flex-col gap-4 items-center" id='user-update-form'>
            <DisplayUpdateUser inputHandler={inputHandler} submitHandler={submitHandler} userData={userData}/> 
        </form>
        </div>
        <Toaster position="top-right"
        reverseOrder={false} />
    </div>
    )
}

export default UpdateUser