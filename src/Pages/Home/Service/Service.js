import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id,Name,price,discription,img}=props.service;
    return (
        <div className='service pb-3'>
            <img src={img} alt="" />
            <h3>{Name}</h3>
            <h5>Price: {price}</h5>
            <p className='px-3'>{discription}</p>
            <Link to={`/booking/${_id}`}>
            <button className='btn btn-warning'>Book {Name}</button>
            </Link>
        </div>
    );
};

export default Service;