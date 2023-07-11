import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 '>
        {/*  Left side*/ }
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
            <img className='rounded-3xl row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1685239218538-11d65c8baaa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
            <img className='rounded-3xl row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1478034203400-84d775bf58ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
            <img className='rounded-3xl row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1543169108-32ac15a21e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" alt="" />
            <img className='rounded-3xl row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1613744516210-fad1239fb6e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="" />
            <img className='rounded-3xl row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        {/*  Right side*/ }
        <div className='flex flex-col lg:pl-0 pl-2 h-full justify-center'>
            <h3 className='text-4xl  md:text-6xl font-bold font-raleway '>Plan Your Next Trip</h3>
            <p className='md:text-2xl text-xl md:py-6 py-4 font-urbanist'>Discover Unforgettable Adventures, Relaxation, and Blissful Escapes. Explore, Indulge, Create Cherished Memories. </p>
            <p className='pb-6 font-jakarta'>Unlock Boundless Possibilities for Adventure, Relaxation, and Memorable Experiences. Embark on a Journey Tailored to Your Dreams and Desires. </p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl font-urbanist '>Learn More</button>
                <button className='bg-black text-white border-black font-urbanist hover:shadow-xl '>Book your trip </button>
            </div>
        </div>
    </div>
  )
}

export default Plan