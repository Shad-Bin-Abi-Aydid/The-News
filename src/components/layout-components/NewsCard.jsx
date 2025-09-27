import { FaRegEye, FaStar, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ data }) => {
  const { title, author, rating, total_view, thumbnail_url, details } = data;
  console.log(data);

  return (
    <div className="card mb-5 shadow-md rounded-xl">
      {/* Author */}
      <div className="flex items-center justify-between bg-gray-100 rounded-t-xl px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        {/* Right side icons */}
        <div className="flex gap-3 text-gray-600 text-lg cursor-pointer">
          <FaBookmark className="hover:text-blue-500" />
          <FaShareAlt className="hover:text-blue-500" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Thumbnail (proper cover style) */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full h-72 object-contain bg-gray-100"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-4 text-sm text-gray-600">
        {details.length > 150 ? (
          <p>
            {details.slice(0, 150)}...{" "}
            <Link to={`/news/${data._id}`} className="text-blue-500 cursor-pointer font-medium">
              Read More
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mx-6 mb-4 border-t pt-3 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span className="font-medium">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
