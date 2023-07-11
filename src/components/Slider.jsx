import React, { useState } from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const slides=[
    {
        url:"https://images.unsplash.com/photo-1497888329096-51c27beff665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
        title:"Breakfast"
    },
    {
        url:"https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        title:"Lunch"
    },
    {
        url:"https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=840&q=80",
        title:"Dinner"
    },
    {
        url:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        title:"Curry"
    },
    {
        url:"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        title:"Pasta"
    },
]

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide=()=>{
        const isFirstSlide=currentIndex===0
        const newSlide=isFirstSlide? slides.length-1:currentIndex-1
        setCurrentIndex(newSlide)
        
    }
    const nextSlide=()=>{
        const isLastSlide=currentIndex===slides.length-1
        const newIndex=isLastSlide?0:currentIndex+1
        setCurrentIndex(newIndex)

    }

    const gotoSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex)

    }
  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 mt-24 md:mt-0  px-4 relative group '>
        <h2 className='text-center lg:text-6xl font-bold text-4xl text-gray-800 mb-5 font-raleway lg:mb-10'>Gallery</h2>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage:`url(${slides[currentIndex].url})`}}></div>
        {/*Left Arrow */}
         <div className='absolute lg:top-[70%] md:top-[60%] top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
         </div>
         {/*Right Arrow */}
         <div className='absolute lg:top-[70%] md:top-[60%] top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
         </div>

         <div className='flex top-4 justify-center py-2'>
            {slides.map((slide,slideIndex)=>(
                <div className='text-2xl cursor-pointer ' key={slideIndex} onClick={()=>gotoSlide(slideIndex)}>

                    <RxDotFilled />
                </div>
            ))}

         </div>
    </div>
  )
}

export default Slider