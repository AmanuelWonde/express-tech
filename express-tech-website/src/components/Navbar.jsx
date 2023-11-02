import React, { useState } from "react";
import { SolidBlueButton } from "./SolidBlueButton";

export function Navbar(){

  const [name, setName] = useState('menu');
  const [show, setShow] = useState(false);

  function onToggleMenu(e){
    name === 'menu' ? setName('close') : setName('menu');
    show === false ? setShow(true) : setShow(false);
  }

  return(
    <nav className="bg-black h-[93px] px-3 text-white flex flex-row-reverse md:flex-row justify-between items-center">
      <div className="text-3xl  cursor-pointer lg:hidden pt-2 z-10 ">
        <ion-icon name={name} onClick={onToggleMenu}></ion-icon>
      </div>
      <div className="z-10">
        <h1 className= "text-2xl pl-8  md:pl-44 lg:pl-0  bg-black">Express Tech</h1>
      </div>
      <div className="">
        <ul className={`lg:static absolute left-0 bg-black min-h-[33vh] lg:min-h-fit min-w-full lg:flex justify-center px-3 space-y-4 lg:space-y-0 lg:px-0 ${show ? "top-[10%]": "top-[-100%]"} transition-all duration-300 ease-in-out items-center lg:z-0 gap-6`}>
          <li className="navLink">Home</li>
          <li className="navLink">About Us</li>
          <li className="navLink">Team</li>
          <li className="navLink">Portfolio</li>
          <li className="navLink">Services</li>
          <li className="navLink">Project Bid</li>
          <li className="navLink">Blog</li>
        </ul>
      </div>
      <div className="hidden md:block z-10  ">
        <SolidBlueButton className="rounded-xl px-2 py-3" lable="Contact Now"/>
      </div>
    </nav>
  )
}