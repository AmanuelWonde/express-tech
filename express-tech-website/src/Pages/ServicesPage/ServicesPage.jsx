import React from "react";
import CustomersComponent from "../HomePage/CustomersComponent";
import { motion } from "framer-motion";
import Card from "../../components/Cards";
import HowItWorksComponent from "../HomePage/HowItWorks";

function ServicesPage(){
  return(
    <div className="pt- bg-[#16283f]">
      <div className="bg-img-3 text-white font-bold text-center py-24">
        <motion.h1 
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-4xl pb-6">Services</motion.h1>
        <motion.h2 
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.25}}
          className="text-xl">Our mission is to make your business better through technology</motion.h2>
      </div>
      <div className="grid grid-row-4 lg:grid-flow-col md:flex-row justify-center gap-6 md:mx-3 pt-20">
        <Card
          initial={{opacity: 0, x: -100}}
          style="row-span-4 bg-blue-600 text-white rounded-xl "
          title="Mobile App Development"
          text="Innovative Mobile App Solutions - Powering Seamless Experiences."
          img="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg" 
          />
        <Card
          style="bg-[#203a59] text-white rounded-xl "
          initial={{opacity: 0, x: 100}}
          title="Website Development"
          text="Creating stunning websites for online success."
          img="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" 
          />
      </div>
      <HowItWorksComponent />
        <div className=" mt-10 pb-10">
          <CustomersComponent />
        </div>
    </div>
  )
}

export default ServicesPage;