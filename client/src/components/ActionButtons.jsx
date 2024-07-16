import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const ActionButtons = ({ uniqId,setUserList }) => {

    const deleteUser = async () => {
        try {
            await axios.delete(import.meta.env.VITE_BACKEND_URL+`/user/delete/${uniqId}`);
            setUserList(prev=>prev.filter((elem)=>elem._id!==uniqId));
            toast.success('User deleted successfully');  
        }
        catch (err) {
            toast.error(`Error deleting user: ${err}`);
        }
    }

    return (
    <div>
    <div className="flex justify-evenly py-2 text-2xl">

        <Link to={`/user/${uniqId}`}>
            <button className="cursor-pointer hover:bg-indigo-500"><FaEye /></button>
        </Link>

        <Link to={`/update-user/${uniqId}`}>
            <button className="cursor-pointer hover:bg-indigo-500"><FaEdit /></button>
        </Link>

        <button className="cursor-pointer hover:bg-indigo-500" onClick={()=>{
            deleteUser();   
        }}><MdDelete /></button>
        
    </div>
    <Toaster position="top-right"
    reverseOrder={false} />
    </div>
    )
}

export default ActionButtons