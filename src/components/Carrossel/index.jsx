"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import iphone from '../../../public/iphone.png';
import Container from "../Container";

export function Carrossel() {
    return (

            <Swiper  loop={true} autoplay={{delay: 5000, disableOnInteraction: false}} modules={[ Autoplay ]} >
                <SwiperSlide  >
                    <Image src={iphone}  />
                </SwiperSlide>
            </Swiper>
        
    )
}