import React from 'react';

const MySingleJob = (props) => {
    const {  title,email,Description,userName } = props.myJob;
    return (
        <tr>
            <td>{email}</td>
            <td>{userName}</td>
            <td>{title}</td>
            <td>{Description}</td>
           
           
        </tr>
    );
};

export default MySingleJob;