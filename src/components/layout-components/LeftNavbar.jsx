import React, { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);
//    {
//         "category_id": "04",
//         "category_name": "Sports"
//       },
  return (
    <div>
      <h2 className="font-semibold">All Category</h2>
      <div className="flex flex-col gap-3 pt-5">
        {
            category.map(category => <button className="btn btn-primary" key={category.category_id}>{category.category_name}</button>)
        }
      </div>
    </div>
  );
};

export default LeftNavbar;
