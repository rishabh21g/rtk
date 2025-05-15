import React from "react";
import { BsBag } from "react-icons/bs";
import { MdMoney } from "react-icons/md";

const Item = ({ item }) => {
  return (
    <div className="flex flex-col gap-2 rounded-none shadow-sm w-80 h-96 items-center justify-center p-6 text-sm text-gray-600 font-bold overflow-y-auto py-8 bg-violet-100">
      <img
        src={item?.image}
        alt="fake item"
        className="object-contain rounded-xl h-20"
      />
      <p>Title : {item?.title}</p>
      <p>Price : {item?.price}</p>
      <p>Category : {item?.category}</p>

      <button className="w-30 h-10 mx-2 bg-purple-800 hover:bg-purple-700 text-gray-300  text-xs flex gap-1.5 items-center justify-center rounded-md cursor-pointer p-3.5">
        Add to cart <BsBag className="size-4" />{" "}
      </button>
    </div>
  );
};

export default Item;
