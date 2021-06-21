import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const JobApply = () => {
    const history = useHistory();
    const { id } = useParams();
    console.log(id);
    const [jobInfo, setJobInfo] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));

    const [jobData, setJobData] = useState({
        userName: user.name,
        email: user.email,

    })
    const handleDateChange = (e) => {
        const newjobInfo = { ...jobData };
        newjobInfo.LinkedinProfile = e.target.value;
        setJobData(newjobInfo);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (jobData.LinkedinProfile) {
            fetch(`http://localhost:4000/applyJob`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(jobData)
            })
            .then(res => res.json())
            .then(data => {
                alert('your request for this job is responded')
                history.replace('/')
            })

        }
        else {
            alert('Please select date')
        }
    }

    useEffect(() => {
        fetch(`http://localhost:4000/job/${id}`)
            .then(res => res.json())
            .then(data => {
                setJobInfo(data);
                const newJobData = { ...jobData }
                newJobData.title = data.title
                newJobData.Description = data.Requirements

                setJobData(newJobData)
            })
    }, [])



    return (
        <div>
            <section class="container-fluid justify-content-center mb-5 ">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-12 col-md-3">
                        <form class="login-area mb-5" onSubmit={handleSubmit}>
                            <h5 class="text-info text-center title mt-5"> Job Circular</h5>
                            <div class="form-group">
                                <input type="text" class="form-control" name="userName" value={user.name} placeholder="UserName" />
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="email" class="form-control" name="userEmail" value={user.email} placeholder="User Email" />
                            </div>
                            <br />
                            <div class="form-group">
                                <input type="text" class="form-control" name="title" value={jobInfo.title} placeholder="Job title" />
                            </div>
                            <br />
                            <textarea name="description" id="" cols="50" rows="10" placeholder='description' value={jobInfo.Requirements}></textarea>
                            <div class="form-group">
                                <input type="text" onChange={handleDateChange} class="form-control" name="LinkedinProfile" placeholder="attach your Linkedin profile Link" />
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobApply;