import { Link } from "react-router-dom";
import "./LatestNews.css";

const LatestNews = () => {
  return (
    <div className="bg-gray-300 flex items-center p-2 gap-2">
      <p className="bg-[#D72050] text-white text-xl font-medium py-2 px-4">
        Latest
      </p>

      <div className="marquee">
        <div className="marquee-track text-[#403F3F] font-semibold">
          <Link className="item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            eveniet. Quis eveniet perspiciatis voluptas natus aut provident
            vero. Eum consectetur nisi sit distinctio eligendi repudiandae
            assumenda provident ullam quod molestias?
          </Link>

          <Link className="item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            eveniet. Quis eveniet perspiciatis voluptas natus aut provident
            vero. Eum consectetur nisi sit distinctio eligendi repudiandae
            assumenda provident ullam quod molestias?
          </Link>
          <Link className="item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            eveniet. Quis eveniet perspiciatis voluptas natus aut provident
            vero. Eum consectetur nisi sit distinctio eligendi repudiandae
            assumenda provident ullam quod molestias?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
