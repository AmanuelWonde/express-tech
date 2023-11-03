import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Card from '../../components/Cards';

export  function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={130}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className='h-[400px] w-full xl:w-[1300px]'
      >
        <SwiperSlide className='flex justify-center items-center'>
        <Card
          initial={{opacity: 0, x: -200}}
          style=" bg-blue-600 text-white rounded-xl"
          title="Mobile App Development"
          text="Innovative Mobile App Solutions - Powering Seamless Experiences."
          img="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg" 
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
        <Card
          style="bg-[#203a59] text-white rounded-xl "
          initial={{opacity: 0, x: 200}}
          title="Website Development"
          text="Creating stunning websites for online success."
          img="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg" 
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
        <Card
          initial={{opacity: 0, x: -200}}
          style=" bg-blue-600 text-white rounded-xl"
          title="Mobile App Development"
          text="Innovative Mobile App Solutions - Powering Seamless Experiences."
          img="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg" 
          />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'>
        <Card
          initial={{opacity: 0, x: -200}}
          style=" bg-blue-600 text-white rounded-xl"
          title="Mobile App Development"
          text="Innovative Mobile App Solutions - Powering Seamless Experiences."
          img="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg" 
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
