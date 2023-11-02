import React from 'react';
import { SolidBlueButton } from '../../components/SolidBlueButton';
import { OutlineButton } from '../../components/OutlineButton';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import animationData from "../../assets/pc-animation.json";


export function FirstComponent() {
  return(
    <div className='bg-img pb-40'>
      <div className='xl:w-[1300px] lg:pt-20 mx-auto flex flex-col lg:flex-row justify-between content-center'>
        <div className='p-8 lg:w-1/2 text-white flex flex-col justify-center content-center text-center lg:text-left' >
          <motion.h3 
            animate={{y: 0, opacity: 1}} initial={{y: 100, opacity: 0}} transition={{duration: 0.5}} 
            className='text-blue-300  md:text-xl mb-4'>
              Towards Digital
          </motion.h3>
          <motion.h1 
            animate={{y: 0, opacity: 1}} initial={{y: 100, opacity: 0}} transition={{duration: 0.6, delay: 0.25}}              
            className='text-4xl lg:text-5xl md:font-bold mb-6'>
            We make IT simple, fast, and reliable
          </motion.h1>
          <motion.p 
            animate={{y: 0, opacity: 1}} initial={{y: 50, opacity: 0}} transition={{duration: 0.8, delay: 0.5}}
            className='mb-6'>
            We specialize in IT Consultation, cutting-edge Software Development, and seamless integration of Websites, Apps, Systems, and APIs.
          </motion.p>
          <div className='flex flex-col sm:flex-row mx-auto lg:mx-0'>
          <SolidBlueButton className="mb-4 sm:mb-0 px-4 py-4 lg:py-6 rounded" lable="Apply For Internship"/>
          <OutlineButton lable="Learn More" className="sm:ml-8 px-6 py-3 lg:py-5  hover:bg-blue-500 rounded hover:border-blue-500 "/>
          </div>
        </div>
        <motion.div 
          animate={{opacity:1}} initial={{opacity: 0}} transition={{duration: 0.8, delay: 0.25}} 
          className='lg:w-1/2 mx-auto p-8'>
          <Lottie className='md:w-[650px] lg:w-full' animationData={animationData}/>
        </motion.div>        
      </div>
    </div>
    )
}