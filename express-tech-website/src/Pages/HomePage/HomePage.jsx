import React from "react";
import { Navbar } from "../../components/Navbar";
import { FirstComponent } from "./FirstPart";
import SecondComponent from "./SecondPart";
import ThirdComponent from "./ThirdPart";
import FourthComponent from "./FourthPart";
import Testimonial from "./Testimonial";
import Projects from "./Projects";
import Newsletter from "./Newsletter";
import Footer from "../../components/Footer";
import { Copyright } from "../../components/Copyright";


function HomePage(){
  return (
    <div>
      <Navbar />
      <FirstComponent /> 
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <Testimonial />
      <Projects />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  )
}

export default HomePage;