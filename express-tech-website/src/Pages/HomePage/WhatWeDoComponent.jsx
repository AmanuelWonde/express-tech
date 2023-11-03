import React, { useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
import Card from "../../components/Cards";

function WhatWeDoComponent(){

  const [scope, animate] = useAnimate();
  const isInView1 = useInView(scope);

  useEffect(() => {
    if(isInView1){
      animate(scope.current, { scale: 1, y: 0 }, { duration: 0.6, delay: 0.25} )
    }
  }, [isInView1])

  return(
    <div className="pt-72 md:pt-28 lg:pt-72  xl:pt-64">
    <motion.div        
      initial={{scale: 0, y: 50}}
      ref={scope}  
      className="pb-14">
      <h1 className="text-center text-lg text-blue-400">What We Do</h1>
      <h1 className="text-center text-3xl text-white mt-5">Revolutionize your perception of technology!</h1>
    </motion.div>
    <div className="flex flex-col md:flex-row justify-center gap-6 md:mx-3">
      <Card
        initial={{opacity: 0, x: -200}}
        style="bg-[#203a59] text-blue-400 rounded-xl "
        title="Mobile Application Development"
        text="Crafted Solutions for Seamless App Development."
        img="https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg"
       />
      
      <Card
        initial={{opacity: 0, x: -200}}
        style="bg-[#203a59] text-blue-400 rounded-xl "
        title="Desktop Application Development & Website"
        text="Custom Desktop Apps & Websites - Tailored Solutions for Success."
        img="https://www.perfomatix.com/wp-content/uploads/2020/10/web-designing-tips.jpg"
       />      

      <Card
        initial={{opacity: 0, x: -200}}
        style="bg-[#203a59] text-blue-400 rounded-xl "
        title="Digital Marketing & Branding"
        text="Dynamic Digital Marketing & Branding Solutions - Amplify Your Presence."
        img="https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/11/DM_blog_post_image_03.jpg"
       />
    </div>
    </div>
  )
}

export default WhatWeDoComponent;