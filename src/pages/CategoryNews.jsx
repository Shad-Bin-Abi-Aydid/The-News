import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/layout-components/NewsCard';

const CategoryNews = () => {
    const {data:news} = useLoaderData();

    
    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} data = {singleNews}></NewsCard>)
                }
            </div>
            
        </div>
    );
};

export default CategoryNews;