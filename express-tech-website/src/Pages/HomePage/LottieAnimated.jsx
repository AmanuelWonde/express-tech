import React, { useEffect } from "react";
import { motion, useAnimate, useInView} from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/pc2-animation.json";

function LottiAnimated(){

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if(isInView){
      animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.8, delay: 0.5})
    }    
  }, [isInView])

  return(
    <motion.div 
    ref={scope}
    initial={{opacity:0, y: 200}}>
    <Lottie className='md:w-[650px] lg:w-full' animationData={animationData}/>
  </motion.div>  
  )
}

export default LottiAnimated;