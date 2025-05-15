import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import { BiStore } from "react-icons/bi";

const Home = () => {
  const [product, setProduct] = useState();
  const fetchProducts = async () => {
    const result = await axios.get("https://fakestoreapi.in/api/products");
    console.log(result?.data?.products);
    setProduct(result?.data?.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-center my-3 mt-6 font-extrabold text-4xl flex items-center gap-2 justify-center">
        Redux store <BiStore />
      </h1>
      <div className="flex flex-wrap gap-8 justify-center p-6 mx-auto my-4">
        {product?.map((item, idx) => (
          <Item item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Home;
