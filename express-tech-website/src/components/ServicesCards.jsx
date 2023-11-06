import React from "react";

export function ServicesCard(props){
  return(
    <div className="flex gap-2 sm:gap-4">
      <div className="bg-blue-600 rounded-[50%] p-4 flex justify-center items-center">
      <ion-icon size="large" name={props.icon}></ion-icon>
      </div>
      <div>
        <h3>{props.title}</h3>
        <p className="text-[#9cb5d4]">{props.text}</p>
      </div>
    </div>
  )
}