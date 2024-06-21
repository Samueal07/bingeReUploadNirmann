import React from 'react'

function Subscription() {
  return (
    <div className="w-full py-16 text-white px-4">
      {/* actually we have 2 col only but
        we use that span to span 1st col to 2x */}
      <div className="mx-auto max-w-[1240px] grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:3xl text-2xl font-bold py-2">
            Join Our NewsLetter
          </h1>

          <p>Sign up to get Access to our Latest Collection</p>
        </div>

        <div className="my-4">
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-bold w-[200px] ml-4 my-6 px-6 py-3 ">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription