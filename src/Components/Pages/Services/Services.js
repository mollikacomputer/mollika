import React, { useEffect, useState } from 'react';
import Experts from '../../CommonPage/Experts/Experts';
import Service from '../Service.js/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch("services.json")
        .then(response => response.json())
        .then(data => setServices(data) )
    } , [])
    return (
        <div className='container'>
            <h2> Service Page</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    > </Service>)
                }
            </div>
            <div id="experts">
                <Experts></Experts>
            </div>
        </div>
    );
};

export default Services;