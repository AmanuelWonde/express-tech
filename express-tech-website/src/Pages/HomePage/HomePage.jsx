import React from "react";
import { Navbar } from "../../components/Navbar";
import { FirstComponent } from "./FirstPart";
import SecondComponent from "./SecondPart";
import ThirdComponent from "./ThirdPart";
import FourthComponent from "./FourthPart";
import Testimonial from "./FifthPart";


function HomePage(){
  return (
    <div>
      <Navbar />
      <FirstComponent /> 
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <Testimonial />
    </div>
  )
}

export default HomePage;