export function SolidBlueButton(props){
  return (
  <button className={`bg-blue-600 hover:bg-blue-500 active:bg-blue-800 transition-all ${props.className} duration-300`}>{props.lable}</button>
  )
}