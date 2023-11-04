import React from 'react';
import CustomersComponent from './CustomersComponent';
import WhatWeDoComponent from './WhatWeDoComponent';

function SecondComponent() {
  return (
    <div className='bg-[#132942] pb-20'>
      <div className='absolute top-[1060px] lg:top-[800px] xl:top-[860px] left-0 right-0'>
        <CustomersComponent />
      </div>
      <WhatWeDoComponent />
    </div>
  )
}

export default SecondComponent;