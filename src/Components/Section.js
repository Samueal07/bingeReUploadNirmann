import React from 'react'
import show from "../Assets/section.png";

function Section() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="mx-auto max-w-[1240px] grid  md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={show} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Waste no Time to Binge</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            More than
            <span className="md:text-4xl text-[#00df9a] sm:text-3xl text-2xl font-bold">
              1000
            </span>
            + Selection
          </h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quidem
            perspiciatis quisquam sunt aut, repudiandae consequatur facere
            perferendis? Explicabo, aperiam delectus ipsam eveniet hic amet
            aliquid eaque voluptatibus voluptatum praesentium.
          </p>

          <button className=" bg-black w-[200px] mx-auto my-6 md:mx-0 rounded-md font-bold py-3 text-white hover:bg-[#00df9a]  duration-500 ease-in-out">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section