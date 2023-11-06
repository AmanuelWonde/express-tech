import React, { useState } from "react";
import { SolidBlueButton } from "./SolidBlueButton";
import { NavLink } from "react-router-dom";

export function Navbar(){

  const [name, setName] = useState('menu');
  const [show, setShow] = useState(false);

  function onToggleMenu(e){
    name === 'menu' ? setName('close') : setName('menu');
    show === false ? setShow(true) : setShow(false);
  }

  return(
    <div className="bg-black  sticky z-20">
      <nav className="bg-black h-[80px] px-4 text-white flex flex-row-reverse md:flex-row justify-between items-center 2xl:w-[1280px] mx-auto ">
        <div className="text-3xl  cursor-pointer lg:hidden pt-2 z-10">
          <ion-icon name={name} onClick={onToggleMenu}></ion-icon>
        </div>
        <div className="z-10">
          <h1 className= "text-2xl pl-8  md:pl-44 lg:pl-0  bg-black">Express Tech</h1>
        </div>
        <div>
          <ul className={`lg:static absolute left-0 bg-black lg:min-h-fit min-w-full flex flex-col lg:flex-row lg:justify-center px-3 lg:px-0 ${show ? "top-[100%]  min-h-[35vh]": "top-[-400%]"} transition-all duration-500 lg:items-center lg:z-0 gap-6 z-[-1]`}>
            <NavLink to="/" className="navLink">Home</NavLink>
            <NavLink to="aboutUs" className="navLink">About Us</NavLink>
            <NavLink to="team" className="navLink">Team</NavLink>
            <NavLink to="portfolio" className="navLink">Portfolio</NavLink>
            <NavLink to="services" className="navLink">Services</NavLink>
            <NavLink to="projectBid" className="navLink">Project Bid</NavLink>
            <NavLink to="blog" className="navLink">Blog</NavLink>
          </ul>
        </div>
        <div className="hidden md:block z-10  ">
          <SolidBlueButton className="rounded-xl px-2 py-3" lable="Contact Now"/>
        </div>
      </nav>
    </div>

  )
}