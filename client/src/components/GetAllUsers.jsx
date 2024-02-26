import { useEffect, useState } from "react"
import DisplayAllUsers from "./DisplayAllUsers"
import axios from 'axios';
import SearchAndSort from "./SearchAndSort";

const GetAllUsers = () => {
    const [userList,setUserList]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const fetchData=async ()=>{
        try{
            const {data}= await axios.get('http://localhost:5000/user/getall')
            setUserList(data);
            setLoading(false);
        }
        catch(err){
            setError(err);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);

    if(error){
        return <h1 className="text-center text-3xl font-medium my-12">{`An error occured ${error}`}</h1>
    }
    else if(loading){
        return <h1 className="text-center text-3xl font-medium my-12">Loading data please wait...</h1>
    }

    else return (
    <div className="">
        <div className="">
            <SearchAndSort setUserList={setUserList}/>
            <DisplayAllUsers userList={userList} setUserList={setUserList}/>
        </div>
    </div>
    )
}

export default GetAllUsers