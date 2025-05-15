import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-2.5 text-sm h-12 bg-purple-800 text-gray-200 p-3 items-center px-6 select-none font-semibold">
      <h3 className="font-bold text-xl">Redux Store</h3>
      <Link to={"/"} className="cursor-pointer">
        Home
      </Link>
      <Link to={"/cart"} className="cursor-pointer">
        Cart
      </Link>
      <p> Cart Items: 0</p>
    </nav>
  );
};

export default Navbar;
