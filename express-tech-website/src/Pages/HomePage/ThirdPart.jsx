import React, { useEffect } from "react";
import { SolidBlueButton } from "../../components/SolidBlueButton";
import { motion, useAnimate, useInView } from "framer-motion"

function ThirdComponent(){

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if(isInView){
      animate(scope.current, { opacity: 1, y: 0 }, { type: "tally", duration: 0.5 } )
    }
  }, [isInView])

  return(
    <div className="bg-img-2  h-96 flex flex-col justify-center text-center text-white">
    <motion.div 
     ref={scope}
     initial={{opacity: 0, y:200}}
    >
      <div className="w-[70%] mx-auto">
        <h1 className="text-4xl mb-3">Delivering IT solutions that enables you to work smarter.</h1> 
      </div>

      <p className="text-lg mb-3">Transformative IT Solutions for Smarter Workflows. </p>
      <div>
        <SolidBlueButton className="px-4 py-4 rounded-md"  lable="Discover More" />
      </div>
    </motion.div>

    </div>
  )
}

export default ThirdComponent;