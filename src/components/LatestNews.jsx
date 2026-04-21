import { Link } from "react-router-dom";
import "./LatestNews.css";
import { NewsContext } from "./Provider/NewsProvider";
import { useEffect, useState } from "react";

const LatestNews = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then((res) => res.json())
        .then((data) => setData(data.data))

      }, [])
      
  return (
    <div className="bg-gray-300 flex items-center p-2 gap-2">
      <p className="bg-[#D72050] text-white text-xl font-medium py-2 px-4">
        Latest
      </p>

      <div className="marquee">
        <div className="marquee-track text-[#403F3F] font-semibold">
           {
            data.map((d, index) => <Link className="mr-10" key={index}>{d.title}</Link>)
           }
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
