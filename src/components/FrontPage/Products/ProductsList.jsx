import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger);

function ProductsList({ children, className, classCol }) {
   const isShowSlider = useMediaQuery({ query: '(max-width: 1399px)' });
   const blockRef = useRef(null)
   useEffect(() => {
      const thiblockRef = blockRef.current.children
      gsap.set(thiblockRef, {
         scaleX: .85,
         scaleY: .85,
         opacity: 0,
      })

      ScrollTrigger.create({
         trigger: thiblockRef,
         start: "top bottom-=100",
         onEnter: () => {
            gsap.to(thiblockRef, {
               scaleX: 1,
               scaleY: 1,
               opacity: 1,
            })
         }
      });
   }, []);
   return (
      !isShowSlider ? (
         <div className={`products_wrap row ${className ? className : ''}`} ref={blockRef}>
            {children}
         </div>
      ) : (
         <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            speed={600}
            breakpoints={{
               1: {
                  spaceBetween: 10,
                  slidesPerView: 'auto'
               },
               768: {
                  spaceBetween: 7,
                  slidesPerView: 'auto'
               },
               1200: {
                  spaceBetween: 20,
                  slidesPerView: 'auto'
               }
            }}
            className={`products_wrap ${className ? className : ''}`} ref={blockRef}>
            {React.Children.map(children, (child) => (
               <SwiperSlide>{child}</SwiperSlide>
            ))}
         </Swiper>
      )
   );
}

export default ProductsList;