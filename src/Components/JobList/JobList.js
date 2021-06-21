import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/Fakedata.json'
import JobDetails from '../JobDetails/JobDetails'


const JobList = () => {
    // const addAllJob = ()=>{
    //     fetch('http://localhost:4000/addJob',{
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

        fetch('http://localhost:4000/joblist?search=' + search)
            .then(res => res.json())
            .then(data => setJobList(data))
    }, [search])

    const handleSearch = event => {
        setSearch(event.target.value)
    }

    return (
        <div className='container'>
            <form className='container'>
                <input type="text" onChange={handleSearch} placeholder='search' className='form-control m-auto mt-5 w-50' />
              
            </form>

            {
                jobList.slice(0, 20).map(jobList => <JobDetails jobList={jobList}></JobDetails>)
            }
        </div>
    );
};

export default JobList;