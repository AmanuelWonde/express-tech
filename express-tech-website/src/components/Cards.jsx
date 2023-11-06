import React, { useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";

function Card(props){

  const [scope, animate] = useAnimate()
  const isInView2 = useInView(scope)

  useEffect(() => {
    if(isInView2){
      animate(scope.current, {opacity: 1, x: 0, y: 0 },{ type: "spring", bounce:0.5, duration: 1.5, delay: 0.5 } )
    }
  }, [isInView2])

  return (
    <motion.div
      ref={scope}
      initial={props.initial}
      className={`${props.style} sm:w-[420px] flex flex-col justify- border-[1.5px] border-[#264872] hover:border-[#519df9] transition-colors duration-300 mx-4 sm:mx-auto md:mx-0`}>
      <div className="p-4">
        <h1 className="text-2xl mb-3">{props.title}</h1>
        <p className="text-[#9cb5d4] text-sm">{props.text}</p>
      </div>
      <div className="h-full flex">
        <img className="rounded-b-xl object-cover" src={props.img} />
      </div>
      
    </motion.div>
  )
}

export default Card;