import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddJob = () => {
    const [job, setJob] = useState({});
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/addjob', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your Job circular is successfully published')
                history.replace('/');
            })
    }

    const handleOnBlur = (e) => {
        const newJob = job;
        newJob[e.target.name] = e.target.value;
        setJob(newJob);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-8">
                        <h3>Add new Job</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" onBlur={handleOnBlur} name="title" className="form-control" placeholder="Job Title" required /> <br />
                            <textarea cols='100' rows='5' className="form-control" type="text" onBlur={handleOnBlur} name="Description" placeholder="Job Description" required /><br />
                            <input className="form-control" type="text" onBlur={handleOnBlur} name="Requirements" placeholder="requirements" required /><br />
                            <input className="form-control" type="text" onBlur={handleOnBlur} name="Salary" placeholder="salary" required /><br />
                            <input type="date" onBlur={handleOnBlur} name="LastDate" required /> <br /><br />
                            <button className="btn btn-primary">Add JOb</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddJob;