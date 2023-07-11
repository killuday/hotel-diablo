import React from "react";
import {
  FaFacebook,
  faFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4 ">
        <div>
          <h6 className="font-bold uppercase pt-2 font-urbanist ">Solutions</h6>
          <ul>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Travel</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Services</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Dining</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Events</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Activities</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 font-urbanist">Support</h6>
          <ul>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Contact Us</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">FAQs</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Policies</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Feedback</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Customer Assistance</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 font-urbanist">Company</h6>
          <ul>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">About</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Blog</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Careers</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Partnerships</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Our Story</li> 
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 font-urbanist">Legal</h6>
          <ul>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Terms of Service</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Privacy Policy</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Copyright Notice</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Disclaimer</li>
            <li className="py-1 hover:text-white cursor-pointer font-raleway text-sm hover:ease-in-out duration-300">Cookie Policy</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold font-urbanist uppercase">Subscribe to our Newsletter</p>
          <p className="py-4 font-raleway">Receive Exclusive Updates and Special Offers</p>
          <form className="flex flex-col sm:flex-row " action="">
            <input
              className="w-full p-2 font-jakarta mr-4 rounded-md mb-4 "
              type="text"
              placeholder="Enter Email"
            />
            <button className="p-2 mb-4 font-jakarta rounded-md">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 ">
        <p className="py-4 font-medium text-gray-300 hover:text-white hover:ease-in-out font-jakarta duration-200 cursor-pointer ">Made With ❤️ by Uday</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook  className="cursor-pointer hover:text-white hover:ease-in-out duration-300" />
          <FaInstagram  className="cursor-pointer hover:text-white hover:ease-in-out duration-300"/>
          <FaLinkedin className="cursor-pointer hover:text-white hover:ease-in-out duration-300" />
          <TiSocialPinterest className="cursor-pointer hover:text-white hover:ease-in-out duration-300" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
