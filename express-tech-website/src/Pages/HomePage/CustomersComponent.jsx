import React from "react";
import { motion } from "framer-motion";

function CustomersComponent(){
  return(
    <motion.div
      initial={{opacity:0}}  animate={{opacity:1}} transition={{duration: 0.8, delay:0.25}}
      className="bg-[#203a59] py-16 px-4 xl:w-[1300px] mx-5 rounded-2xl absolute top-[1060px] lg:top-[660px] xl:top-[860px] left-0 right-0 lg:mx-auto text-white flex flex-col justify-center items-center gap-9 border border-[#4672a5] hover:border-[#5998e0] transition-color duration-300">
    <h1 className="text-xl sm:text-3xl md:text-4xl">Join our <span className="text-blue-500 text-2xl sm:text-4xl md:text-5xl">100+</span> happy customers</h1>
    <div className="grid grid-cols-4  md:grid-cols-6 gap-4 space-y-4">
      <img className="w-[150px]" src="https://hexlabs.tech/wp-content/uploads/2023/06/12.png"/>
      <img className="w-[150px]" src="https://hexlabs.tech/wp-content/uploads/2023/06/11.png"/>
      <img className="w-[150px]" src="https://hexlabs.tech/wp-content/uploads/2023/06/10.png"/>
      <img className="w-[150px]" src="https://hexlabs.tech/wp-content/uploads/2023/06/9.png"/>
      <img className="w-[80px] sm:w-[150px]" src="https://hexlabs.tech/wp-content/uploads/2023/06/8.png"/>
      <img className="w-[150px]" src="https://hexlabs.tech/wp-content/uploads/2023/06/7.png"/>
      <img className="w-[150px] md:col-start-2" src="https://hexlabs.tech/wp-content/uploads/2023/06/6.png"/>
      <img className="w-[150px]" src="https://hexlabs.tech/wp-content/uploads/2023/06/4.png"/>
      <img className="w-[150px] col-start-2 md:col-start-4" src="https://hexlabs.tech/wp-content/uploads/2023/06/5.png"/>
      <img className="w-[150px]" src="https://hexlabs.tech/wp-content/uploads/2023/06/3.png"/>
    </div>

    </motion.div>
  )
}

export default CustomersComponent;