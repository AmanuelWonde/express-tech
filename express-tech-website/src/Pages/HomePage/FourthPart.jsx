import React from "react";
import OurServices from "./OurServices";
import Card from "../../components/Cards";
import HowItWorksComponent from "./HowItWorks";


function FourthComponent(){

  return(
    <div className="bg-[#132942] pb-20">
      <OurServices />
      <div className="grid grid-row-4 lg:grid-flow-col md:flex-row justify-center gap-6 md:mx-3">
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
    </div>
  )
}

export default FourthComponent;