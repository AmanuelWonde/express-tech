import React from "react";
import { Navbar } from "../../components/Navbar";
import { FirstComponent } from "./FirstPart";
import SecondComponent from "./SecondPart";


function HomePage(){
  return (
    <div>
      <Navbar />
      <FirstComponent /> 
      <SecondComponent />
    </div>
  )
}

export default HomePage;