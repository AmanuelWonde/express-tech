import React from "react";
import { Input } from "../../components/Input";
import { SolidBlueButton } from "../../components/SolidBlueButton";


function Newsletter(){

  return(
    <div className="bg-[#203a59] pt-10 pb-20">
      <div className="mb-6">
        <h1 className="text-white text-center text-3xl">Subscribe to our Newsletter</h1>
      </div>
      <div className="flex justify-center px-2">
        <Input lable="Your email" className="rounded-l-lg focus:outline-none focus:border-2 focus:border-blue-600" />
        <SolidBlueButton lable="Subscribe" className="text-white px-4 rounded-r-lg" />
      </div>  
    </div>
  )
  

}

export default Newsletter;