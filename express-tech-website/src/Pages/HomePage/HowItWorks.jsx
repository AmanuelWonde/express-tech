import React, { useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import Card from "../../components/Cards";

function HowItWorksComponent(){

  const [scope, animate] = useAnimate();
  const isInView1 = useInView(scope);

  useEffect(() => {
    if(isInView1){
      animate(scope.current, { scale: 1, y: 0 }, { duration: 0.6, delay: 0.25} )
    }
  }, [isInView1])

  return(
    <div className="pt-14">
    <motion.div        
      initial={{scale: 0, y: 50}}
      ref={scope}  
      className="pb-14">
      <h1 className="text-center text-3xl text-white mb-5" >How it works</h1>
      <h1 className="text-center text-blue-200"> Our Free Consultation Service Delivers Expert Guidance on IT Solutions, Charting a Path to Optimal Success. </h1>
    </motion.div>
    <div className="flex flex-col md:flex-row justify-center md:mx-3 xl:w-[1300px] xl:mx-auto">
      <Card
        initial={{opacity: 0, x: -200}}
        style="bg-[#203a59] md:rounded-b-xl text-white md:relative top-7  py-6  "
        title="Discover the product"
        text="Hex Labs' Process - Product Discovery, Collaboration, and Unleashing Breakthrough Solutions."
       />
      
      <Card
        initial={{opacity: 0, x: 200}}
        style="bg-blue-600 text-white md:rounded-t-xl  py-6 "
        title="Free Consultations"
        text="ex Labs' Process - Engage, Assess, Advise - Delivering Tailored Solutions through Free Consultations."
       />      

      <Card
        initial={{opacity: 0, x: -200}}
        style="bg-[#203a59] text-white  md:rounded-b-xl md:relative top-7  py-6 "
        title="Wireframe & Production"
        text="Hex Labs' Process - Collaborate, Design, Develop - From Wireframe to Production, Delivering Exceptional Results."
       />

      <Card
        initial={{opacity: 0, x: 200}}
        style="bg-blue-600 text-white md:rounded-t-xl  py-6 "
        title="Prototype Application"
        text="Hex Labs' Process - Ideate, Prototype, Refine - Creating Cutting-Edge Applications with Precision.."
       />
    </div>
    </div>
  )
}

export default HowItWorksComponent;