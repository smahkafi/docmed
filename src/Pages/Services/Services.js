import React from 'react';
import { useParams } from 'react-router';

const Services = () => {
    const {servicesId, description} = useParams();
    return (
        <div>
            <h4>{servicesId}</h4>
            <p>
                {description}
            </p>
        </div>
    );
};

export default Services;