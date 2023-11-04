import React from "react";
import { FirstComponent } from "./FirstPart";
import SecondComponent from "./SecondPart";
import ThirdComponent from "./ThirdPart";
import FourthComponent from "./FourthPart";
import Testimonial from "./Testimonial";
import Projects from "./Projects";
import Newsletter from "./Newsletter";


function HomePage(){
  return (
    <div>
      <FirstComponent /> 
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <Testimonial />
      <Projects />
      <Newsletter />
    </div>
  )
}

export default HomePage;