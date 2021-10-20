
import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ServicesDetail = () => {
    const {servicesId} = useParam();
    const {services} = useAuth();
    const previousData = services?.find(services=>services?.id===servicesId)
    return (
        <div>
            <h2>{previousData?.name}</h2>
        </div>
    );
};

export default ServicesDetail;