import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
const SeeUser = () => {
    const {userId}=useParams();
    const [userData,setUserData]=useState({});

    const FetchData= async()=>{
        try{
            const {data}=await axios.get(import.meta.env.VITE_BACKEND_URL+`/user/getone/${userId}`);
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

    return (
    <div className="w-full min-h-[70vh] max-h-max flex justify-center items-center mt-12">
        <div className="bg-blue-300/20 border-2 rounded-md border-blue-500/60 p-4">
        <Link to='/' >
            <button  className="flex gap-1 items-center">
            <span className="text-2xl"><IoArrowBack/></span>
            <span>Back</span>
            </button>
        </Link>
        <h2 className="font-semibold text-4xl text-center mb-8">User Details</h2>
        <div className="w-[70vw] flex flex-col gap-4 items-center text-blue-600">
        {Object.keys(userData).length?<div className="text-2xl font-medium flex flex-col gap-2">
            <h3>{`First Name : ${userData.fname}`}</h3>
            <h3>{`Last Name : ${userData.lname}`}</h3>
            <h3>{`Age : ${userData.age}`}</h3>
            <h3>{`Gender : ${userData.gender}`}</h3>
            <h3>{`Status : ${userData.status}`}</h3>
        </div>
        :<h2 className="text-2xl font-medium">Loading Data...</h2>}
        </div>
        </div>
    </div>
    )
}

export default SeeUser