import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './AdvatagesCard.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive'
import { Mousewheel } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

function AdvatagesCard({ children, className, animateReady }) {
   const isShowSlider = useMediaQuery({ query: '(max-width: 1399px)' });

   const blockRef = useRef(null);
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true); // гарантирует, что мы на клиенте
      animateReady(false)

      if (!blockRef.current || isShowSlider) return;

      const childrenElements = blockRef.current.children;

      gsap.set(childrenElements, {
         scaleX: 0.85,
         scaleY: 0.85,
         opacity: 0,
      });

      ScrollTrigger.create({
         trigger: blockRef.current,
         start: "top bottom-=100",
         onEnter: () => {
            gsap.to(childrenElements, {
               scaleX: 1,
               scaleY: 1,
               opacity: 1,
               stagger: 0.1,
            });
         }
      });
   }, [isShowSlider, animateReady]);

   if (!isClient) return null; // SSR-защита

   return (
      !isShowSlider ? (
         <div className={`advantages_card row ${className || ''}`} ref={blockRef}>
            {children}
         </div>
      ) : (
         <Swiper
            modules={[Mousewheel]}
            spaceBetween={20}
            slidesPerView={'auto'}
            speed={600}
            mousewheel={{
               forceToAxis: true,
            }}
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
            className={`advantages_card ${className || ''}`}
         >
            {React.Children.map(children, (child, idx) => (
               <SwiperSlide key={idx}>{child}</SwiperSlide>
            ))}
         </Swiper>
      )
   );
}

export default AdvatagesCard;
