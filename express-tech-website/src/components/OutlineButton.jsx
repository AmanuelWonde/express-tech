import { HiOutlineArrowNarrowRight } from "react-icons/hi"

export function OutlineButton(props){
  return (
  <button className={`${props.className}  border-2 transition-all duration-300 p-4`}>
  <div className="flex gap-4">
    {props.lable}  <HiOutlineArrowNarrowRight className="text-2xl"/>
  </div></button>
  )
}