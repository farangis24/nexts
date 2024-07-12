import React from "react";
import { useParams } from "react-router-dom";
import { categoryData } from "../data/categories";

export const ProductDetail = () => {
  const obj = useParams();
  const data = categoryData.find((item) => item.id == obj.id);
  return (
    <div className="container text-center ">
      <img className="pl-[560px] pb-[10px] " src={data.img} alt="img" />
      <div className="">
        <h1 className="text-3xl pb-[25px]">{data?.name}</h1>
        <p className="pb-[15px] text-[30px]">{data.title}</p>
        <p className="pb-[15px] text-[20px] text-orange-600">{data.price}</p>
        <button className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-[8px] ">
          Sotib olish
        </button>
      </div>
    </div>
  );
};
