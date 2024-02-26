import ActionButtons from "./ActionButtons";

const DisplayAllUsers = ({userList,setUserList}) => {
return (
    <table className="w-[80vw] text-center">
        <thead className="text-3xl bg-indigo-400 text-white">
            <tr>
            <th className="font-medium pt-2 pb-3">S.no</th>
            <th className="font-medium pt-2 pb-3">First Name</th>
            <th className="font-medium pt-2 pb-3">Last Name</th>
            <th className="font-medium pt-2 pb-3">Age</th>
            <th className="font-medium pt-2 pb-3">Gender</th>
            <th className="font-medium pt-2 pb-3">Status</th>
            <th className="font-medium pt-2 pb-3">Actions</th>
            </tr>
        </thead>
        {userList.length===0?<tbody className="text-center text-3xl font-medium my-12"><tr><td>No users present!!!</td></tr></tbody>:<tbody className="text-lg font-medium">
        {userList.map((elem,index)=>{
            const {_id,fname,lname,age,gender,status}=elem;
            return <tr key={_id} className={index%2===0?'bg-indigo-200':'bg-indigo-300'}>
            <td>{index+1}</td>
            <td >{fname}</td>
            <td>{lname}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td><ActionButtons uniqId={_id} setUserList={setUserList}/></td>
        </tr>
        })}
        </tbody>}
        
    </table>
)
}

export default DisplayAllUsers