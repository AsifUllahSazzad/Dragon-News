import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({news = {}}) => {

    const {author, title, image_url, details, total_view, rating} = news;

    return (
        <div className="card bg-base-100 shadow-md p-4 space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 p-3 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg leading-snug">
        {title}
      </h2>

      {/* Image */}
      <img
        src={image_url}
        alt=""
        className="w-full object-cover"
      />

      {/* Details */}
      <p className="text-sm text-gray-600">
        {details.length > 150
          ? details.slice(0, 150) + "..."
          : details}
        <span className="text-orange-500 font-semibold cursor-pointer ml-1">
          Read More
        </span>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center border-t pt-3">
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="text-sm font-medium">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
    );
};

export default NewsCard;