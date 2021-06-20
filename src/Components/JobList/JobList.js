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
    useEffect(()=>{
        fetch('http://localhost:4000/joblist')
        .then(res=>res.json())
        .then(data=>setJobList(data))
    })
    return (
        <div className='container'>
            
           {
               jobList.slice(0,20).map(jobList => <JobDetails jobList={jobList}></JobDetails>)
           }
        </div>
    );
};

export default JobList;