import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger);

function ProductsNewList({ children, className, classCol }) {
   const isShowSlider = useMediaQuery({ query: '(max-width: 1399px)' });

   const blockRef = useRef(null);

   useEffect(() => {

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
   }, [isShowSlider]);

   // определение высоты
   useEffect(() => {
      const setMaxSlideTitleHeight = () => {
         const swiper = blockRef.current;
         if (!swiper) return;
         if (isShowSlider) return

         const slides = Array.from(swiper.querySelectorAll('.products_wrap_item'));

         let maxHeight = 0;

         // Сначала сбросить высоты
         slides.forEach(item => {
            const title = item.querySelector('.products_wrap_item-title');
            if (title) title.style.minHeight = 'auto';
         });

         // Найти максимальную
         slides.forEach(item => {
            const title = item.querySelector('.products_wrap_item-title');
            if (title) {
               const height = title.offsetHeight;
               if (height > maxHeight) maxHeight = height;
            }
         });

         // Применить
         slides.forEach(item => {
            const title = item.querySelector('.products_wrap_item-title');
            if (title) title.style.minHeight = `${maxHeight}px`;
         });
      };

      // Запуск при монтировании
      setMaxSlideTitleHeight();

      // Обновление при ресайзе
      window.addEventListener('resize', setMaxSlideTitleHeight);

      // Очистка слушателя
      return () => {
         window.removeEventListener('resize', setMaxSlideTitleHeight);
      };
   }, [isShowSlider]);
   // removed unused demo array
   return (
      !isShowSlider ? (
         <div className={`products_wrap row ${className ? className : ''}`} ref={blockRef}>
            {children}
         </div>
      ) : (
         <Swiper
            spaceBetween={20}
            slidesPerView={3}
            speed={600}
            breakpoints={{
               1: {
                  spaceBetween: 10,
                  slidesPerView: 'auto'
               },
               768: {
                  spaceBetween: 30,
                  slidesPerView: 'auto'
               },
               1200: {
                  spaceBetween: 30,
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

export default ProductsNewList;