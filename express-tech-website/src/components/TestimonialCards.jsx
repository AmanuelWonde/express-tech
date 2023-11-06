import React, { useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";

function TestimonialCard(props){

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if(isInView){
      animate(scope.current, {opacity: 1, x: 0, y: 0 },{ type: "spring", bounce:0.5, duration: 1.5, delay: 0.5 } )
    }
  }, [isInView])

  return (
    <motion.div
      ref={scope}
      initial={props.initial}
      className=' text-white rounded-xl bg-[#355986] border-[1.5px] border-[#264872] hover:border-[#519df9] transition-colors duration-300 mx-4'>
      <div className="flex justify-center pt-3">
        <img className="rounded-[50%] w-14 h-14 object-cover" src={props.img} />
      </div>
      <div className="p-4">
        <h1 className="text-xl text-center mb-3">{props.testimonial}</h1>
        <p className="text-[#9cb5d4] text-center text-sm">{props.name}</p>
        <p className="text-[#3f83d6] text-center text-sm">{props.position}</p>
      </div>
      
    </motion.div>
  )
}

export default TestimonialCard;