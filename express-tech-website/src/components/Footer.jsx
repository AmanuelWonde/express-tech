import React from "react";
import { CustomIcons } from "./CustomIcons";
function Footer(){
  return(
    <div className="bg-[#203a59]">
      <div className="xl:w-[1300px] mx-auto pb-4">
        <div className="text-white grid grid-cols-3 lg:grid-cols-4 text-sm pb-8 px-4">
          <div className="col-span-3 pb-6 lg:col-span-1 lg:pb-0">
            <h1 className="text-3xl pb-4">Express Tech</h1>
            <p className="pb-4">
            Your trusted partner for innovative software solutions. We combine expertise, vision, and passion to drive digital transformation and deliver exceptional results.
            </p>
            <div className="space-x-2">
              <CustomIcons name="fa-facebook" />
              <CustomIcons name="fa-instagram" />
              <CustomIcons name="fa-twitter" />
              <CustomIcons name="fa-youtube" />
              <CustomIcons name="fa-linkedin" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl text-left pb-4 pr-16">Services</h1>
            <ul className="space-y-2">
              <li className="navLink">Web Design</li>
              <li className="navLink">Mobile App</li>
              <li className="navLink">System Development</li>
              <li className="navLink">API Development</li>
              <li className="navLink">API Integration</li>
              <li className="navLink">Online Marketing</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-xl pb-4 pr-2">Support</h1>
              <ul className="space-y-2">
                <li className="navLink">Help Center</li>
                <li className="navLink">Call Us</li>
                <li className="navLink">FAQ</li>
                <li className="navLink">Contact Us</li>
              </ul>            
            </div>
          <div className="flex flex-col lg:items-center">
            <h1 className="text-xl pb-4 pr-6">Company</h1>
            <ul className="space-y-2">
              <li className="navLink">About Us</li>
              <li className="navLink">Portfolio</li>
              <li className="navLink">Careers</li>
              <li className="navLink">Services</li>
              <li className="navLink">Articles & News</li>
              <li className="navLink">Legal Notic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
  

}

export default Footer;