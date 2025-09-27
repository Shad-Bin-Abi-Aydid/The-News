import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {

    const [newsData, setNewsData] = useState([]);

    console.log(newsData);

    useEffect(()=>{

        fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => setNewsData(data.data))

    },[])
    return (
        <div className='flex gap-5 items-center bg-gray-300 p-3' >
            <p className='text-white bg-[#D72050] p-2'>Latest</p>
            <Marquee pauseOnHover={true} speed={90}>
                {
                    newsData.map(singleData =><Link className='pl-10'>{singleData.title}</Link>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;