export function CustomIcons(props){
  return(
    <i className={`fab ${props.name} text-xl bg-blue-600 rounded px-2 py-1 cursor-pointer active:bg-blue-700 transition-all duration-300 hover:text-2xl hover:bg-blue-500`} />
  )
}