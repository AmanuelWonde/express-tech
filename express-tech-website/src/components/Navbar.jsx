import React, { useState } from "react";

export function Navbar(){

  const [name, setName] = useState('menu');
  const [show, setShow] = useState(false);

  function onToggleMenu(e){
    name === 'menu' ? setName('close') : setName('menu');
    show === false ? setShow(true) : setShow(false);
  }

  return(
    <nav className="bg-black h-[93px] px-3 text-white flex flex-row-reverse md:flex-row justify-between items-center">
      <div className="text-3xl cursor-pointer lg:hidden pt-2">
        <ion-icon name={name} onClick={onToggleMenu}></ion-icon>
      </div>
      <div>
        <h1 className= "text-2xl  md:pl-48 lg:pl-0">Express Tech</h1>
      </div>
      <div className="">
        <ul className={`lg:static absolute left-0 bg-black min-h-[33vh] lg:min-h-fit min-w-full lg:flex justify-center px-3 space-y-4 lg:space-y-0 lg:px-0 ${show ? "top-[10%]": "top-[-100%]"} transition-all duration-300 ease-in-out items-center z-[-1] lg:z-0 gap-6`}>
          <li className="navLink">Home</li>
          <li className="navLink">About Us</li>
          <li className="navLink">Team</li>
          <li className="navLink">Portfolio</li>
          <li className="navLink">Services</li>
          <li className="navLink">Project Bid</li>
          <li className="navLink">Blog</li>
        </ul>
      </div>
      <button className="bg-blue-600 rounded-xl px-2 py-3 hover:bg-blue-500 active:bg-blue-800 hidden transition-all duration-150 md:block">Contact Now</button>
    </nav>
  )
}