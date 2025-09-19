import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const {data} = useLoaderData();

    console.log(data);
    return (
        <div>
            <h1>Category {data.length}</h1>
            <h1>{data[0].details}</h1>
            <img src={data[0].image_url} alt="" />
            
        </div>
    );
};

export default CategoryNews;