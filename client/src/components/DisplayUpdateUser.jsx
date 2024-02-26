import React from 'react'

const DisplayUpdateUser = ({userData,inputHandler,submitHandler}) => {
    const {fname,lname,age,gender,status}=userData  || '';

    return (
    <div className="w-[30vw] flex flex-col gap-3">
        <div className="w-full flex justify-between">
            <label htmlFor='fname' className="text-xl font-medium">First Name<span className="text-red-500">*</span> : </label>
            <input id='fname' name='fname' type="text" onChange={inputHandler} value={fname || ''} placeholder="enter first name" required
            className=""/>
        </div>
        <div className="w-full flex justify-between">
            <label htmlFor='lname' className="text-xl font-medium">Last Name<span className="text-red-500">*</span> : </label>
            <input id='lname' name='lname' value={lname || ''}  type="text" onChange={inputHandler} placeholder="enter last name" required
            className=""/>
        </div>
        <div className="w-full flex justify-between">
            <label htmlFor='age' className="text-xl font-medium">Age<span className="text-red-500">*</span> : </label>
            <input id='age' type="text" value={age || ''}  name='age' onChange={inputHandler}placeholder="enter age" required
            className=""/>
        </div>

        <div className="w-full flex justify-between">
            <label htmlFor='gender' className='font-medium text-xl' >Gender <span className="text-red-500">*</span>: </label>
            <select id='gender' name='gender' className='' value={gender} onChange={inputHandler}>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
            </select>
        </div>
        <div className="w-full flex justify-between">
            <label htmlFor='status' className='font-medium text-xl' >Status <span className="text-red-500">*</span>: </label>
            <select id='status' name='status' className='' value={status} onChange={inputHandler}>
                <option value='inactive'>Inactive</option>
                <option value='active'>Active</option>
            </select>
        </div>

        <div className="flex gap-4 justify-center">
            <input type="submit" value="Submit" onClick={submitHandler} className=" font-semibold text-xl text-white bg-indigo-400 rounded-md px-3 py-1 hover:bg-indigo-500 cursor-pointer"/>
            <input type="reset" value="Reset" className=" font-semibold text-xl text-white bg-indigo-400 rounded-md px-3 py-1 hover:bg-indigo-500 cursor-pointer"/>
        </div>
    </div>
    )
}

export default DisplayUpdateUser