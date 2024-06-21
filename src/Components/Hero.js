import React from "react";
import Typed from "react-typed";



function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 uppercase">
          One Stop for Entertainment
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md-py-6">
          Never get bored
        </h1>

        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Get,all your
          </p>

          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-[#00fd9a] md:pl-4"
            strings={["Animes", "Series", "Movies"]}
            typeSpeed={120}
            backDelay={140}
            loop
          />
        </div>
        <button className="bg-[#00df9a] w-[200px] mx-auto my-6 rounded-md font-bold py-3 text-black hover:bg-white duration-500 ease-in-out">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;
 