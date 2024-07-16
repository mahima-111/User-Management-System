import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
const SearchAndSort = ({setUserList}) => {
    const [searchText,setSearchText]=useState('');
    const [genderButton,setGenderButton]=useState('all');
    const [statusButton,setStatusButton]=useState('all');
    const [sortButton,setSortButton]=useState('default');
    const handleGenderChange=(e)=>{
        setGenderButton(e.target.value);
    }
    const handleStatusChange=(e)=>{
        setStatusButton(e.target.value);
    }
    const handleSortChange=(e)=>{
        setSortButton(e.target.value);
    }
    const handleSearch=(e)=>{
        setGenderButton('all');
        setStatusButton('all');
        fetchData(searchText);
    }
    const handleClear=()=>{
        setSearchText('');
        fetchData('');
    }
    const fetchData= async(searchText)=>{
        try{
            const {data}=await axios.get(import.meta.env.VITE_BACKEND_URL+`/condition?search=${searchText}&gender=${genderButton}&status=${statusButton}&sort=${sortButton}`);
            setUserList(data);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        fetchData(searchText);
    },[genderButton,statusButton,sortButton])
    return (
    <div className='flex justify-between mb-6 items-center w-[85vw]'>
        <div>
        <input type='text' placeholder='search user..' className='mr-1' value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
        }}/>
        <button onClick={handleClear} className='mr-2 py-1'><IoClose/></button>
        <button onClick={handleSearch}>Search</button>
        </div>

        <div className='flex flex-col'>
            <h3 className='font-medium text-xl'>Filter by Gender</h3>
            <div className='flex gap-3 text-lg'>
                <div>
                <input type='radio' id='all' name='filterByGender' value='all' checked={genderButton==='all'} onChange={handleGenderChange}/>
                <label htmlFor='all' >All</label>
                </div>

                <div>
                <input type='radio' id='female' name='filterByGender' value='female' checked={genderButton==='female'} onChange={handleGenderChange}/>
                <label htmlFor='female' >Female</label>
                </div>

                <div>
                <input type='radio' id='male' name='filterByGender' value='male' checked={genderButton==='male'} onChange={handleGenderChange}/>
                <label htmlFor='male' >Male</label>
                </div>
            </div>
        </div>

        <div className='flex'>
            <label htmlFor='sort' className='font-medium text-xl mr-3' >Sort By</label>
            <select id='sort' name='sort' className='text-lg' value={sortButton} onChange={handleSortChange}>
                <option value='default'>Default</option>
                <option value='nameAsc'>Name (a-z)</option>
                <option value='nameDesc'>Name (z-a)</option>
                <option value='ageAsc'>Age (asc)</option>
                <option value='ageDesc'>Age (desc)</option>
            </select>
        </div>

        <div className='flex flex-col'>
            <h3 className='font-medium text-xl'>Filter by Status</h3>
            <div className='flex gap-3 text-lg'>
                <div>
                <input type='radio' id='all' name='filterByStatus' value='all' checked={statusButton==='all'} onChange={handleStatusChange}/>
                <label htmlFor='all' >All</label>
                </div>

                <div>
                <input type='radio' id='active' name='filterByStatus' value='active' checked={statusButton==='active'} onChange={handleStatusChange}/>
                <label htmlFor='active' >Active</label>
                </div>

                <div>
                <input type='radio' id='inactive' name='filterByStatus' value='inactive' checked={statusButton==='inactive'} onChange={handleStatusChange}/>
                <label htmlFor='inactive' >Inactive</label>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SearchAndSort