import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    
    return (
        <div id='services'>
            <h2 className='text-primary my-3'>Our Services</h2>
            <div className="service_container">
             {
                services.map(service=><Service
                    service={service}
                    key={service.id}
                ></Service>)
             }
            </div>
        </div>
    );
};

export default Services;