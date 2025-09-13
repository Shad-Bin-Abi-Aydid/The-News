import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
        {category.map((category) => (
          <NavLink to={`/category/${category.category_id}`} className="btn btn-primary" key={category.category_id}>
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
