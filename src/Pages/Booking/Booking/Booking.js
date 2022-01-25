import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceId}=useParams();
    const [service,setService]=useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <div style={{marginTop:"10px"}}>
                <h2>Detai of: {service.Name}</h2>
                <img src={service.img} alt="" />
                <p>{service.discription}</p>
            </div>
        </div>
    );
};

export default Booking;