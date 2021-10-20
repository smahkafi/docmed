import React from 'react';
import error from '../../imges/About/404.jpg'

const NotFound = () => {
    return (
        <div className="mt-5">
            <img src={error} className="img-fluid" alt="" />
        </div>
    );
};

export default NotFound;