import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import TestimonialCard from '../../components/TestimonialCards';

export  function Carousel() {



  return (
    <>
      <Swiper

        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }}

        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className=' h-[500px] w-full xl:w-[1300px]'
      >
        <SwiperSlide className='flex justify-center items-center'>
        <TestimonialCard          
          img="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg"
          initial={{opacity: 0, x: -200}}
          testimonial="I can confidently say that partnering with Stellar Web Solutions has been a game-changer for our company. Their professionalism, exceptional talent, and unwavering commitment to excellence set them apart from the competition. "
          name="John Adams"
          position='CEO'
          />
        </SwiperSlide>

        <SwiperSlide className='flex justify-center items-center '>
        <TestimonialCard          
          img="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg"
          initial={{opacity: 0, x: -200}}
          testimonial="I can confidently say that partnering with Stellar Web Solutions has been a game-changer for our company. Their professionalism, exceptional talent, and unwavering commitment to excellence set them apart from the competition. "
          name="John Adams"
          position='CEO'
          />
        </SwiperSlide>

        <SwiperSlide className='flex justify-center items-center '>
        <TestimonialCard          
          img="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg"
          initial={{opacity: 0, x: -200}}
          testimonial="I can confidently say that partnering with Stellar Web Solutions has been a game-changer for our company. Their professionalism, exceptional talent, and unwavering commitment to excellence set them apart from the competition. "
          name="John Adams"
          position='CEO'
          />
        </SwiperSlide>

        <SwiperSlide className='flex justify-center items-center '>
        <TestimonialCard          
          img="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg"
          initial={{opacity: 0, x: -200}}
          testimonial="I can confidently say that partnering with Stellar Web Solutions has been a game-changer for our company. Their professionalism, exceptional talent, and unwavering commitment to excellence set them apart from the competition. "
          name="John Adams"
          position='CEO'
          />
        </SwiperSlide>

        <SwiperSlide className='flex justify-center items-center '>
        <TestimonialCard          
          img="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg"
          initial={{opacity: 0, x: -200}}
          testimonial="I can confidently say that partnering with Stellar Web Solutions has been a game-changer for our company. Their professionalism, exceptional talent, and unwavering commitment to excellence set them apart from the competition. "
          name="John Adams"
          position='CEO'
          />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
