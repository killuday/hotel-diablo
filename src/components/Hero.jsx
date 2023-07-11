import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-screen">
    <img className="top-0 left-0 w-full h-screen object-cover" src="https://images.unsplash.com/photo-1504643039591-52948e3ddb47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="/" />
    <div className="bg-black/25 absolute top-0 left-0 w-full h-screen" />
    <div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>

        <p className='text-white pl-2 font-jakarta'>All Inclusive</p>
        <h1 className='font-bold text-4xl md:text-7xl drop-shadow-2xl font-urbanist '>Mountain Serenity: A Retreat in the Heights</h1>
        <p className='max-w-[600px] drop-shadow-2xl py-2 font-jakarta text-base md:text-xl'>Escape to a tranquil mountain retreat, surrounded by awe-inspiring vistas, where serenity and rejuvenation await amidst nature's embrace.</p>
        <button className='bg-white text-black font-urbanist '>Reserve Now</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero