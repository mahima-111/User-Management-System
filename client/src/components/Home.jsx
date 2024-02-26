import GetAllUsers from "./GetAllUsers"
import { GrFormAdd } from "react-icons/gr";
import { Link } from "react-router-dom";
const Home = () => {
    return (
    <div className="w-full flex justify-center items-center my-20">
        <div>
        <div className="w-[80vw] flex justify-between mb-12">
            <h1 className="font-semibold text-5xl">USER DASHBOARD</h1>
            <Link to='/add-user'> 
                <button  className="flex gap-1 items-center py-2">
                <span className="text-2xl"><GrFormAdd/></span>
                <span>New User</span>
                </button>
            </Link>
        </div>
        <GetAllUsers/>
        </div>
    </div>
    )
}

export default Home