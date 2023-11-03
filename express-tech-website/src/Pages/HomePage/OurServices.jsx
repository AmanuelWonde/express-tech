import React, { useEffect } from 'react';
import { motion, useAnimate, useInView } from 'framer-motion';
import { ServicesCard } from '../../components/ServicesCards';
import LottiAnimated from './LottieAnimated';


function OurServices(){

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);


  useEffect(() => {
    if(isInView){
      animate(scope.current, { opacity: 1, x: 0 }, { duration: 0.8, delay: 0.5})
    }    
  }, [isInView])

  return(
    <div>
      <div className='xl:w-[1300px] lg:pt-20 mx-auto flex flex-col lg:flex-row justify-between content-center pb-16'>
        <motion.div
          ref={scope}
          initial={{opacity: 0, x: -200}}
         className='p-8 lg:w-1/2 text-white flex flex-col justify-center content-center ' >
          <h3 
            className='text-blue-300  md:text-xl mb-4'>
              Our Services
          </h3>
          <h1             
            className='text-4xl lg:text-5xl md:font-bold mb-6'>
            Let us do the work, so you can focus on what matters.
          </h1>
          <p className='mb-6 text-[#9cb5d4] '>
            Transformative IT Solutions, Dynamic Digital Marketing, and Inspiring Creative Solutions – Unleashing Limitless Potential.
          </p>
          <div className='space-y-5'>
          <ServicesCard icon="bulb" title="Creative Solutions" text="Creative Solutions - Unleashing Possibilities for Your Vision."/>
          <ServicesCard icon="megaphone" title="Digital Marketing" text="Dynamic Digital Marketing Solutions - Fueling Growth & Engagement."/>
          <ServicesCard icon="desktop" title="IOT & Programing" text="Seamless IoT & Programming Solutions - Empowering Connectivity."/>
          </div>

        </motion.div>
        <div className='lg:w-1/2 mx-auto p-8'>
          <LottiAnimated />
        </div>
      </div>
    </div>
  )
}

export default OurServices;