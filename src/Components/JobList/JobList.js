import React, { useEffect, useState } from 'react';
import JobDetails from '../JobDetails/JobDetails'
import './JobList.css'


const JobList = () => {
    // const addAllJob = ()=>{
    //     fetch('https://stark-cliffs-75141.herokuapp.com/addJob',{
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(FakeData)

    //     })
    //     .then(res=> res.json())
    //     .then(data=>console.log(data))
    // }
    const [jobList, setJobList] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {

        fetch('https://stark-cliffs-75141.herokuapp.com/joblist?search=' + search)
            .then(res => res.json())
            .then(data => setJobList(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)
    }

    return (
        <div className='container'>
            <h4 className='text-center mt-3 search-option'>Search your dream Job by title !!</h4>
            <form className='container'>
                <input type="text" onChange={handleSearch} placeholder='search' className='form-control m-auto mt-3 w-50' />

            </form>

            {
                jobList.slice(0, 20).map(jobList => <JobDetails jobList={jobList}></JobDetails>)
            }
        </div>
    );
};

export default JobList;