import { Swiper, SwiperSlide } from 'swiper/react';
import './LandingProducts.scss'
import { nanoid } from 'nanoid';
import { useEffect, useRef } from 'react';

function LandingProducts({ className, dataProduct }) {
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
            const title = item.querySelector('.landing_products_slider_sw_item_head');
            if (title) title.style.minHeight = 'auto';
         });

         // Найти максимальную
         slides.forEach(item => {
            const title = item.querySelector('.landing_products_slider_sw_item_head');
            if (title) {
               const height = title.offsetHeight;
               if (height > maxHeight) maxHeight = height;
            }
         });

         // Применить
         slides.forEach(item => {
            const title = item.querySelector('.landing_products_slider_sw_item_head');
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
      <div className={`landing_products ${className ? className : ''}`}>
         <div className="container">
            <div className="landing_products_wrap">
               <h2 className="landing_products-title">Наши продукты</h2>
               <div className="landing_products_slider">

                  <Swiper
                     className='landing_products_slider_sw'
                     slidesPerView={3}
                     spaceBetween={20}
                     ref={swiperRef}
                     breakpoints={{
                        1: {
                           slidesPerView: 'auto',
                           spaceBetween: 6
                        },
                        1200: {
                           slidesPerView: 3,
                           spaceBetween: 20
                        },
                     }}
                  >
                     {dataProduct.map(item => (
                        <SwiperSlide className='landing_products_slider_sw_item' key={nanoid()}>
                           <div className="landing_products_slider_sw_item_head">
                              {item.iconIsImage ? (

                                 <div className="landing_products_slider_sw_item_head-icon">
                                    <img src={item?.headIcon} alt="" />
                                 </div>
                              ) : (
                                 <div className="landing_products_slider_sw_item_head-icon" dangerouslySetInnerHTML={{ __html: item.headIcon }} />
                              )}
                              <div className="landing_products_slider_sw_item_head-text">
                                 <p>
                                    {item.headtext}
                                 </p>
                              </div>
                           </div>
                           <div className="landing_products_slider_sw_item_body">
                              {item.iconIsImage ? (
                                 <div className="landing_products_slider_sw_item_body-model">
                                    <img src={item?.image} alt="" />
                                 </div>
                              ) : (
                                 <div className="landing_products_slider_sw_item_body-model" dangerouslySetInnerHTML={{ __html: item.image }} />
                              )}
                              <h3 className="landing_products_slider_sw_item_body-title">
                                 {item.title}
                              </h3>
                              <div className="landing_products_slider_sw_item_body-text">
                                 <p>
                                    {item.descr}
                                 </p>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LandingProducts;