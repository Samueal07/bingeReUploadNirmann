import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare

} from "react-icons/fa"
function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="lg:col-span-2">
        <h1 className="w-full text-3xl font-bold text-[#00fd9a] m-4 ml-0 ">
          BINGE
        </h1>

        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eveniet neque nostrum fuga id odio ex quae iure? Earum totam
          laudantium modi eligendi quos praesentium quia autem fuga distinctio
          expedita!
        </p>

        <div className="flex md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className=" flex justify-between pt-8">
        <div>
          <h6 className="font-bold text-gray-400">Watch</h6>
          <ul>
            <li className="py-2 text-sm">Home</li>
            <li>Movies</li>
            <li>Web Series</li>
            <li>Anime</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer