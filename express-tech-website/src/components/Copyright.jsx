export function Copyright(){
  const date = new Date();
  const year = date.getFullYear();
  return(
  <div className="bg-[#355986] py-4">
      <p className="text-center text-sm text-gray-300 ">Copyright © {year} Express Tech, All rights reserved. Powered by Express Tech</p>
  </div>
  )
}