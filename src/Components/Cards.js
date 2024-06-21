import React from 'react'
import Anime from "../Assets/Anime.png";
import Movie from "../Assets/Movies.png";
import Serie from "../Assets/Series.png";
function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="mx-auto max-w-[1240px] grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Anime}
            alt="/"
          />

          <h2 className="text-2xl font-bold text-center pt-4">Anime Hub</h2>

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Slice of Life</p>
            <p className="py-2 border-b mx-8 ">Adventure</p>
            <p className="py-2 border-b mx-8 ">Isekai</p>
          </div>

          <button className="bg-[#00df9a] w-[200px] mx-auto my-14 rounded-md font-bold py-3 text-black hover:bg-black hover:text-white duration-500 ease-in-out">
            Watch
          </button>
        </div>

        <div className="w-full   shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Movie}
            alt="/"
          />

          <h2 className="text-2xl font-bold text-center pt-4">Movie Hub</h2>

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Romantic</p>
            <p className="py-2 border-b mx-8 ">Horror</p>
            <p className="py-2 border-b mx-8 ">Thriller</p>
          </div>

          <button className="bg-[black] w-[200px] mx-auto my-6 rounded-md font-bold py-3 text-[white] hover:bg-[#00df9a] hover:text-black duration-500 ease-in-out">
            Watch
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-0.5rem] bg-white"
            src={Serie}
            alt="/"
          />

          <h2 className="text-2xl font-bold text-center pt-4">Series Hub</h2>

          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Latest</p>
            <p className="py-2 border-b mx-8 ">Trending</p>
            <p className="py-2 border-b mx-8 ">Animated</p>
          </div>

          <button className="bg-[#00df9a] w-[200px] mx-auto my-8 rounded-md font-bold  py-3 text-black hover:bg-black hover:text-white duration-500 ease-in-out">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards