import React from 'react';
import { Link } from "react-router-dom";
const JobDetails = (props) => {
    const job = props.jobList;

    const { _id, title, Requirements, Salary, LastDate, Description } = job;


    return (
        <div>
            <div class="card w-75 m-3">
                <h5 class="card-header">{title}</h5>
                <div class="card-body">
                    <h5 class="card-title">Description: {Description} </h5>
                    <h5 class="card-title">Requirements: {Requirements} </h5>
                    <h6 class="card-text">Salary: {Salary}</h6>
                    <h6 class="card-text">Last Date : {LastDate}</h6>
                    <Link to={`/applyJob/${_id}`}>
                        <button className='btn btn-success'>Apply</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;