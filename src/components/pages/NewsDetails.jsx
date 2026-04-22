import React from 'react';
import { useLoaderData } from 'react-router-dom';

const NewsDetails = () => {

    const {data} = useLoaderData();

    const news = data[0];

    return (
        <div>
            <h3 className="mb-3 font-semibold text-xl">Dragon News</h3>

            
        </div>
    );
};

export default NewsDetails;