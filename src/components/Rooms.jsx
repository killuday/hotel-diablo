import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-pink-100 mx-auto my-10  pt-16 lg:mb-[33%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 ">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2 ">
        <h3 className="md:text-3xl text-2xl font-bold font-urbanist ">
          Refined Retreats: Our Exquisite Accommodations
        </h3>
        <p className="pt-4 font-raleway">
          Immerse yourself in luxurious comfort and elegance with our exquisite
          accommodations. Experience a perfect blend of style, sophistication,
          and relaxation in every room.
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1535657823029-0fe64c7b8efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          alt="/"
        />
        <img
          className="w-full h-full object-cover rounded-xl row-span-2"
          src="https://images.unsplash.com/photo-1574539602047-548bf9557352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
          alt="/"
        />
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1526725702345-bdda2b97ef73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
