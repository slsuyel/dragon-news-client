import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const category = useLoaderData();
  console.log(category);

  return (
    <div>
      {
        category.map(news=> <NewsCard 
        key={news._id}
        news = {news}
        ></NewsCard>)
      }
    </div>
  );
};

export default Category;
