import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00fd9a] m-4">BINGE</h1>

      {/* hidden on mobile but visible on large screen */}
      <ul className="hidden md:flex text-center">
        <li className="p-4">Home</li>
        <li className="p-4">Movies</li>
        <li className="p-4">Animes</li>
        <li className="w-fit p-4 ">Web Series</li>
        <li className="p-4">Suggestions</li>
      </ul>
      {/* abover 640 px make it hidden mobile first approach */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00fd9a] m-4 mx-8 my-8 ">
          BINGE
        </h1>
        <ul className=" p-4 uppercase text-center">
          <li className="p-4 border-b border-gray-600 ">Home</li>
          <li className="p-4 border-b border-gray-600 ">Movies</li>
          <li className="p-4 border-b border-gray-600 ">Animes</li>
          <li className="p-4 border-b border-gray-600  ">Web Series</li>
          <li className=" p-4 border-b border-gray-600  ">Suggestions</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
