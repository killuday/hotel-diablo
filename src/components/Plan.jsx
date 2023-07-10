import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 '>
        {/*  Left side*/ }
        <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
            <img className='rounded-3xl row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1685239218538-11d65c8baaa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
            <img className='rounded-3xl row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1685239218538-11d65c8baaa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
            <img className='rounded-3xl row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1685239218538-11d65c8baaa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
            <img className='rounded-3xl row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1685239218538-11d65c8baaa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
            <img className='rounded-3xl row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1685239218538-11d65c8baaa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="" />
        </div>
        {/*  Right side*/ }
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold '>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'> Lorem lauda lassan  Lorem lauda lassan  Lorem lauda lassan </p>
            <p className='pb-6'>Lorem lauda lassan  Lorem lauda lassan  Lorem lauda lassan Lorem lauda lassan </p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl '>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl '>Book your trip </button>
            </div>
        </div>
    </div>
  )
}

export default Plan