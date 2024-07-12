import React from "react";
import { Link } from "react-router-dom";
import { categoryData } from "../data/categories";

export const Home = () => {
  return (
    <div className="    container flex flex-wrap gap-[20px] pt-5 mx-auto ">
      {categoryData.map((item) => (
        <Link
          className="bg-white rounded-[10px] transition-transform transform hover:scale-105 hover:shadow-lg"
          to={`/products/product-detail/${item.id}`}
          key={item.id}
        >
          <img src={item.img} alt="img" />
          <h1 className="text-[24px]">{item.name}</h1>
          <p className="w-[200px] text-[15px] hover:text-sky-500">
            {item.title}
          </p>
          <p className="text-[18px] pb-[10px] ">{item.price}</p>
          <button className="       px-5 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-[8px]">
            Ko'rish
          </button>
        </Link>
      ))}
    </div>
  );
};
