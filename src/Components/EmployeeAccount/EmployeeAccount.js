import React from 'react';
import jobImage from '../../Images/job-search.png'
import './EmployeeAccount.css'
import { Link } from "react-router-dom";

const EmployeeAccount = () => {
    return (
        <div>
            <div className="row container m-5">
                <div className="col-md-4">
                    <div class="card" >
                        <img class="card-img-top" src={jobImage} alt="JOb icon" className='job-image' />
                        <div class="card-body">
                            <h5 class="card-title text-success">Premium</h5>
                            <h6 class="card-title">BDT 2000</h6>
                            <p class="card-text">Get the opportunity to give 20 job posts. </p>
                            <Link to='/processPayment' class="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" >
                        <img class="card-img-top" src={jobImage} alt="JOb icon" className='job-image' />
                        <div class="card-body">
                            <h5 class="card-title text-success">Standard</h5>
                            <h6 class="card-title">BDT 2000</h6>
                            <p class="card-text">Get the opportunity to give 20 job posts. </p>
                            <Link to='/processPayment' class="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" >
                        <img class="card-img-top" src={jobImage} alt="JOb icon" className='job-image' />
                        <div class="card-body">
                            <h5 class="card-title text-success">Basic</h5>
                            <h6 class="card-title">BDT 2000</h6>
                            <p class="card-text">Get the opportunity to give 20 job posts. </p>
                            <Link to='/processPayment' class="btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EmployeeAccount;