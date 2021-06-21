import React from 'react';
import { Link } from "react-router-dom";
import "./JobDetails.css"
const JobDetails = (props) => {
    const job = props.jobList;

    const { _id, title, Requirements, Salary, LastDate, Description } = job;


    return (
        <div>
            <div class="card w-75 m-3">
                <h5 class="card-header">{title}</h5>
                <div class="card-body">
                    <h6 class="card-title"><span className='job-info'>Description:</span> {Description} </h6>
                    <h6 class="card-title"><span className='job-info'>Requirements:</span> {Requirements} </h6>
                    <h6 class="card-text"><span className='job-info'>Salary:</span> {Salary}</h6>
                    <h6 class="card-text"><span className='job-info'>Last Date of application : </span>{LastDate}</h6>
                    <Link to={`/applyJob/${_id}`}>
                        <button className='btn btn-success'>Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;