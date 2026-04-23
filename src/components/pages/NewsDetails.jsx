import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const NewsDetails = () => {
  const { data } = useLoaderData();

  const news = data[0];

  const { image_url, title, details } = news;

  const navigate = useNavigate();

  const handleAllNews = () =>{
      navigate('/category/08')
  }

  return (
    <div>
      <h3 className="mb-3 font-semibold text-xl">Dragon News</h3>

      <div className="card bg-base-100 w-full shadow-sm border border-[#E7E7E7]">
        <figure className="px-10 pt-10">
          {<img src={image_url} alt="news-image" className="rounded-xl w-full" />}
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="text-base text-[#706F6F] leading-6">{details}</p>
          <div className="card-actions">
            <button onClick={handleAllNews} className="btn btn-primary bg-red-700 border-none">
              <IoMdArrowBack />
              All news in this category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
