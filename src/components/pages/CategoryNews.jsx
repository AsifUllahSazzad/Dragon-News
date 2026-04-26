import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h3 className="mb-3 font-semibold text-xl">Dragon News Home</h3>

      {/* Card */}
      <div className="space-y-5">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
