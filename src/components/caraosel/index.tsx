'use client'
import React from 'react'
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
function Caraosel({images}:{images:string[]}) {
  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {
            images.map((image)=>(
                <SwiperSlide key={image}>
                    <Image src={image} width={400} height={300} alt={image} className='h-auto w-full' priority/>
                </SwiperSlide>
            ))
        }
        
    </Swiper>
  )
}

export default Caraosel