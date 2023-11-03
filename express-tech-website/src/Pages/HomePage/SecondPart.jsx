import React from 'react';
import CustomersComponent from './CustomersComponent';
import WhatWeDoComponent from './WhatWeDoComponent';

function SecondComponent() {
  return (
    <div className='bg-[#132942] pb-20'>
      <CustomersComponent />
      <WhatWeDoComponent />
    </div>
  )
}

export default SecondComponent;