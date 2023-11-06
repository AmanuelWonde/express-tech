export function Input(props){
  return (
  <input className={`bg-gray-800 pr-5 pl-2 py-3  w-[320px] text-white ${props.className}`} placeholder={props.lable} />
  )
}