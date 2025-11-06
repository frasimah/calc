import { useEffect, useRef } from 'react';
import SectionHead from '../../utilities/SectionHead/SectionHead';
import SectionHeadIcon from '../../utilities/SectionHead/SectionHeadIcon';
import SectionHeadTitlte from '../../utilities/SectionHead/SectionHeadTitlte';
import './ProductPageWork.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { nanoid } from 'nanoid';

function ProductPageWork({ dataWork }) {
   const swiperRef = useRef();

   // определение высоты
   useEffect(() => {
      const setMaxSlideTitleHeight = () => {
         const swiper = swiperRef.current;
         if (!swiper) return;

         const slides = Array.from(swiper.querySelectorAll('.swiper-slide'));

         let maxHeight = 0;

         // Сначала сбросить высоты
         slides.forEach(item => {
            const title = item.querySelector('.product_page_work_wrap_slider_sw_item_top-title');
            if (title) title.style.minHeight = 'auto';
         });

         // Найти максимальную
         slides.forEach(item => {
            const title = item.querySelector('.product_page_work_wrap_slider_sw_item_top-title');
            if (title) {
               const height = title.offsetHeight;
               if (height > maxHeight) maxHeight = height;
            }
         });

         // Применить
         slides.forEach(item => {
            const title = item.querySelector('.product_page_work_wrap_slider_sw_item_top-title');
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
   }, []);

   return (
      <section className='product_page_work'>
         <div className="product_page_work_wrap">
            <SectionHead>
               <SectionHeadIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width={63} height={64} viewBox="0 0 63 64" fill="none">
                     <path d="M28.6211 36.6639C28.599 36.5532 28.5879 36.4426 28.5879 36.3319C28.5879 36.1992 28.5879 36.0775 28.5879 35.9668C28.5879 35.148 28.732 34.4398 29.0202 33.8423C29.3084 33.2448 29.6853 32.7026 30.1508 32.2158C30.6164 31.7068 31.1041 31.231 31.614 30.7884C32.1461 30.3237 32.656 29.8368 33.1437 29.3278C33.4319 29.018 33.6869 28.686 33.9086 28.332C34.1302 27.9557 34.2965 27.5685 34.4074 27.1701C34.5404 26.7718 34.6069 26.3956 34.6069 26.0415C34.6069 25.2891 34.4406 24.6584 34.1081 24.1494C33.7755 23.6404 33.3211 23.2642 32.7447 23.0207C32.1683 22.7552 31.4921 22.6224 30.7162 22.6224C30.1176 22.6224 29.5079 22.7109 28.8872 22.888C28.2886 23.0429 27.7676 23.3195 27.3242 23.7178C26.8808 24.0941 26.5816 24.6141 26.4264 25.278H23.5C23.6108 24.3928 23.8769 23.6183 24.2981 22.9544C24.7415 22.2905 25.2957 21.7483 25.9608 21.3278C26.6259 20.8852 27.3575 20.5532 28.1556 20.3319C28.9759 20.1106 29.8183 20 30.6829 20C31.8579 20 32.9663 20.2102 34.0083 20.6307C35.0503 21.029 35.8927 21.6598 36.5356 22.5228C37.1785 23.3859 37.5 24.5145 37.5 25.9087C37.5 26.5947 37.4113 27.2365 37.234 27.834C37.0566 28.4094 36.7906 28.9627 36.4359 29.4938C36.1033 30.0028 35.7043 30.5007 35.2387 30.9876C34.6623 31.6072 34.0859 32.1715 33.5095 32.6805C32.9331 33.1674 32.4565 33.6985 32.0796 34.2739C31.7027 34.8271 31.5143 35.5353 31.5143 36.3983C31.5143 36.4426 31.5143 36.4869 31.5143 36.5311C31.5143 36.5754 31.5143 36.6196 31.5143 36.6639H28.6211ZM30.0178 44C29.4414 44 28.9648 43.8119 28.5879 43.4357C28.2332 43.0595 28.0558 42.5837 28.0558 42.0083C28.0558 41.4329 28.2332 40.9571 28.5879 40.5809C28.9648 40.2047 29.4414 40.0166 30.0178 40.0166C30.5942 40.0166 31.0709 40.2047 31.4477 40.5809C31.8246 40.9571 32.0131 41.4329 32.0131 42.0083C32.0131 42.5837 31.8246 43.0595 31.4477 43.4357C31.0709 43.8119 30.5942 44 30.0178 44Z" fill="url(#paint0_linear_3423_72620)" />
                     <path d="M61.5001 38C61.5001 49.3136 61.5001 54.9708 57.9853 58.4853C54.4708 62.0001 48.8136 62.0001 37.5 62.0001" stroke="url(#paint1_linear_3423_72620)" strokeWidth={3} strokeLinecap="round" />
                     <path d="M25.5001 62.0001C14.1863 62.0001 8.52948 62.0001 5.01472 58.4853C1.5 54.9708 1.5 49.3136 1.5 38" stroke="url(#paint2_linear_3423_72620)" strokeWidth={3} strokeLinecap="round" />
                     <path d="M25.5001 2C14.1863 2 8.52948 2 5.01472 5.51472C1.5 9.02948 1.5 14.6863 1.5 26.0001" stroke="url(#paint3_linear_3423_72620)" strokeWidth={3} strokeLinecap="round" />
                     <path d="M37.5 2C48.8136 2 54.4708 2 57.9853 5.51472C61.5001 9.02948 61.5001 14.6863 61.5001 26.0001" stroke="url(#paint4_linear_3423_72620)" strokeWidth={3} strokeLinecap="round" />
                     <defs>
                        <linearGradient id="paint0_linear_3423_72620" x1="30.5" y1="20.1905" x2="30.5" y2="44.1905" gradientUnits="userSpaceOnUse">
                           <stop stopColor="white" />
                           <stop offset={1} stopColor="white" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_3423_72620" x1="49.5" y1="38.1905" x2="49.5" y2="62.1906" gradientUnits="userSpaceOnUse">
                           <stop stopColor="white" />
                           <stop offset={1} stopColor="white" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_3423_72620" x1="13.5" y1="38.1905" x2="13.5" y2="62.1906" gradientUnits="userSpaceOnUse">
                           <stop stopColor="white" />
                           <stop offset={1} stopColor="white" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_3423_72620" x1="13.5" y1="2.19048" x2="13.5" y2="26.1906" gradientUnits="userSpaceOnUse">
                           <stop stopColor="white" />
                           <stop offset={1} stopColor="white" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_3423_72620" x1="49.5" y1="2.19048" x2="49.5" y2="26.1906" gradientUnits="userSpaceOnUse">
                           <stop stopColor="white" />
                           <stop offset={1} stopColor="white" stopOpacity="0.2" />
                        </linearGradient>
                     </defs>
                  </svg>

               </SectionHeadIcon>
               <SectionHeadTitlte className={'white'}>
                  {dataWork.sectionTitle}
               </SectionHeadTitlte>
            </SectionHead>
            <div className="product_page_work_wrap_slider">
               <Swiper
                  speed={600}
                  slidesPerView={4}
                  spaceBetween={20}
                  className="product_page_work_wrap_slider_sw"
                  ref={swiperRef}
                  breakpoints={{
                     1: {
                        slidesPerView: 'auto',
                        spaceBetween: 6,
                     },
                     1200: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                     },
                     1400: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                     },
                  }}
               >
                  {dataWork.list.map((item, index) => (
                     <SwiperSlide className='product_page_work_wrap_slider_sw_item' key={nanoid()}>
                        <div className="product_page_work_wrap_slider_sw_item_top">
                           <div className="product_page_work_wrap_slider_sw_item_top-num">
                              {index + 1}
                           </div>
                           <h3 className="product_page_work_wrap_slider_sw_item_top-title">
                              {item.title}
                           </h3>
                        </div>
                        <div className="product_page_work_wrap_slider_sw_item_body">
                           <div className="product_page_work_wrap_slider_sw_item_body-text" dangerouslySetInnerHTML={{ __html: item.text }}>

                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className="product_page_work_wrap-circle">
               <img src="/img/svg/circle.svg" alt="" />
            </div>
         </div>
      </section>
   );
}

export default ProductPageWork;