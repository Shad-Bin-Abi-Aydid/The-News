import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../Header";
import RightNavbar from "./RightNavbar";

const News = () => {
  const news = useLoaderData(); // ✅ fetched single news data
  const navigate = useNavigate();

  const { title, author, image_url, details } = news.data[0]; // API returns { data: [news] }

  return (
    <div className="px-5">
      <Header></Header>

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-500 mb-4"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start gap-5">
        <div className="border border-gray-300 p-5 rounded-lg">
          {/* Image */}
          <img
            src={image_url}
            alt={title}
            className="w-full rounded-lg mb-4 object-cover"
          />

          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">{title}</h2>

          {/* Details */}
          <p className="text-gray-700 leading-relaxed max-w-4xl ">{details}</p>
        </div>

        <div>
            <RightNavbar></RightNavbar>
        </div>
        
      </div>
    </div>
  );
};

export default News;
