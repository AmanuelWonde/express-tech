import React from "react";
import { SolidBlueButton } from "../../components/SolidBlueButton";
import CustomersComponent from "../HomePage/CustomersComponent";
import { motion } from "framer-motion";

function AboutUsPage(){
  return(
    <div className="pt- bg-[#16283f]">
      <div className="bg-img-3 text-white font-bold text-center py-24">
        <motion.h1 
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-4xl pb-6">About Us</motion.h1>
        <motion.h2 
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.25}}
          className="text-xl">We make IT simple, faster, and reliable.</motion.h2>
      </div>
      <div className="px-5 xl:w-[1300px] mx-auto pt-20">
        <motion.div
          initial={{opacity: 0, x: -200}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.75, delay: 0.25}}
        >
          <h3 className='text-blue-300  md:text-xl mb-4'>
            Who We Are
          </h3>
          <h1             
            className='text-white text-4xl lg:text-5xl md:font-bold mb-6'>
            Towards Digital - ወደ ዲጂታል
          </h1>
          <p className='mb-6 text-[#9cb5d4] '>
          Welcome to Express Tech, a software development company dedicated to providing cutting-edge solutions for businesses and individuals alike. With a focus on website, application, and API development, as well as machine learning and AI, we strive to create innovative solutions that are tailored to meet the unique needs of our clients.
          </p>
          <p className='mb-6 text-[#9cb5d4]'>
          At Express Tech, we believe that technology can help drive progress and growth in all sectors of society, and we are committed to using our skills and expertise to help Ethiopia and Africa move towards a more digital future. We believe that by leveraging the power of technology, we can help create new opportunities, enhance productivity, and improve the lives of people throughout the region.
          </p>
          <p className='mb-6 text-[#9cb5d4] '>
          Our team is made up of talented and passionate developers who are dedicated to creating solutions that are both functional and user-friendly. We take pride in our ability to listen carefully to our clients’ needs and work closely with them to create customized solutions that are tailored to their specific requirements. At Expres Tech, we are driven by a vision of a world where technology is used to make a positive impact on people’s lives. Whether you are a small business owner, a large corporation, or an individual looking to harness the power of technology to achieve your goals, we are here to help.
          </p>
          <p className='mb-6 text-[#9cb5d4] '>
          Contact us today to learn more about our services and how we can help you achieve your digital goals.
          </p>
          <SolidBlueButton lable="Contact us" className="text-white px-4 py-4 rounded-sm"/>
        </motion.div>
        <div className=" mt-10 pb-10">
          <CustomersComponent />
        </div>
      </div>

    </div>
  )
}

export default AboutUsPage;