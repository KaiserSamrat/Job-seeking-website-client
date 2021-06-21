import React from 'react';
import { useHistory } from 'react-router-dom';

const SingleJobdata = (props) => {
    const { _id, title, Requirements, Salary, LastDate, Description } = props.job;
    const history = useHistory();
    const handleDelete = () => {
        fetch(`http://localhost:4000/deleteJob/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                alert('Registration is successfully deleted')
                history.replace('/')
            });
    }
    return (

        <tr>
            <td>{title}</td>
            <td>{Requirements}</td>
            <td>{Salary}</td>
            <td>{LastDate}</td>
            <td><button className="btn btn-danger" onClick={handleDelete}>Delete</button></td>

            {/* <td><button  onClick={handleDelete} className="btn btn-danger">Delete</button></td> */}
        </tr>

    );
};

export default SingleJobdata;