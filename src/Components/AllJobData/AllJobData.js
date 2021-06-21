import React, { useEffect, useState } from 'react';
import SingleJobdata from '../SingleJobData/SingleJobdata'

const AllJobData = () => {
    const [jobData, setJobData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/allJOb`)
            .then(res => res.json())
            .then(data => setJobData(data))
    }, [])
    return (
        <div className='container'>
            <table className="table">
                <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Email</th>
                                <th>Title</th>
                                <th>Requirements</th>
                                <th>Salray</th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                            jobData.map(job=><SingleJobdata job={job}></SingleJobdata>)
                        }
                    </tbody>
                </table>
        </div>
    );
};

export default AllJobData;