import React, { useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import Card from "../../components/Cards";
import { Carousel } from "./Carousel";

function Testimonial(){

  const [scope, animate] = useAnimate();
  const isInView1 = useInView(scope);

  useEffect(() => {
    if(isInView1){
      animate(scope.current, { scale: 1, y: 0 }, { duration: 0.6, delay: 0.25} )
    }
  }, [isInView1])

  return(
    <div className="pt-14 pb-14 bg-[#203a59]">
    <motion.div        
      initial={{scale: 0, y: 50}}
      ref={scope}  
      className="pb-4">
      <h3 className="text-center text-xl text-blue-400 mb-5">Testimonial</h3>
      <h1 className="text-center text-4xl text-white mb-5" >What they say about us</h1>
      <h1 className="text-center text-blue-200">Express Tech Exceeds Expectations – Trusted, Reliable, and Delivering Remarkable Results.  </h1>
    </motion.div>
    <div className="flex flex-col md:flex-row justify-center md:mx-3">
      <Carousel />
    </div>
    </div>
  )
}

export default Testimonial;