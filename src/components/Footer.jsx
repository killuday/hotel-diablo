import React from 'react'
import {FaFacebook, faFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4 '>
            <div>
                <h6 className='font-bold uppercase pt-2 '>Solutions</h6>
                <ul>
                    <li className="py-1">Travel</li>
                    <li className="py-1">Travel</li>
                    <li className="py-1">Travel</li>
                    <li className="py-1">Travel</li>
                    <li className="py-1">Travel</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 '>Support</h6>
                <ul>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Pricing</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 '>Company</h6>
                <ul>
                    <li className="py-1">About</li>
                    <li className="py-1">Blog</li>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Pricing</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2 '>Legal</h6>
                <ul>
                    <li className="py-1">About</li>
                    <li className="py-1">Blog</li>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Pricing</li>
                    <li className="py-1">Pricing</li>
                </ul>
            </div>
            <div className='col-span-2 py-8 md:pt-2'>
                <p className='font-bold uppercase'>Sunscribe to our newsletter</p>
                <p className='py-4'>news articles send to ur inbisc</p>
                <form className='flex flex-col sm:flex-row ' action="">
                    <input className='w-full p-2 mr-4 rounded-md mb-4 ' type="text" placeholder='Enter Email' />
                    <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 '>
            <p className='py-4 font-medium text-white '>Made With ❤️ by Uday</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook  />
                <FaInstagram />
                <FaLinkedin  />
                <TiSocialPinterest size={30} />
            </div>
        </div>


    </div>
  )
}

export default Footer