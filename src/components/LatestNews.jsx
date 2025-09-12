import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center bg-gray-300 p-3' >
            <p className='text-white bg-[#D72050] p-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={90} className='space-x-10'>
                <Link to='/news'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, inventore.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet.</Link>
                <Link to='/news'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, inventore.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;