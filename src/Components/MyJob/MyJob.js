import React, { useEffect, useState } from 'react';
import MySingleJob from '../mySingleJob/MySingleJob'

const MyJob = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [myJobs, setMyJobs] = useState([]);
    console.log(myJobs);

    useEffect(() => {
        fetch(`http://localhost:4000/myJobList/${user.email}`)
            .then(res => res.json())
            .then(data => setMyJobs(data))
    }, [])
    return (
        <div className='container'>
            <h3 className='text-info text-center mt-3'>My job list</h3>
            <table className="table">
                <thead>
                    <tr>

                        <th>Email</th>
                        <th>Title</th>
                        <th>Requirements</th>
                        <th>Salray</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myJobs.map(myJob => <MySingleJob myJob={myJob}></MySingleJob>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyJob;