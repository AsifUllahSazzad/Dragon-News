import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
      );

      const data = await response.json();

      setCategories(data.data.news_category);
    };

    fetchData();
  }, []);

  /*
  "category_id": "01",
"category_name": "Breaking News"
  */

  return (
    <div>
      <h3 className="mb-3 font-semibold text-xl">All Caterogy</h3>

      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink 
          to={`/category/${category.category_id}`}
          className="btn border-none" key={category.category_id}>{category.category_name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
