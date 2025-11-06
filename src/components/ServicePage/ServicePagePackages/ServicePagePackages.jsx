import './ServicePagePackages.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

function ServicePagePackages({ data, openModal }) {

   return (
      <div className="services_page_packages">
         <h2 className='services_page_packages-title'>
            Ежемесячные пакеты услуг
         </h2>
         <Swiper
            className='services_page_packages-sw'
            slidesPerView={4}
            spaceBetween={20}
            speed={600}
            breakpoints={{
               1: {
                  spaceBetween: 7,
                  slidesPerView: 'auto'
               },
               1200: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               }
            }}
         >
            {data.packages.map((item, index) => (
               <SwiperSlide className='services_page_packages_item' key={index}>
                  <div className="services_page_packages_item-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <h3 className="services_page_packages_item-title">
                     {item.title}
                  </h3>
                  <div className="services_page_packages_item-text">
                     <p>
                        {item.text}
                     </p>
                  </div>
                  <div className="services_page_packages_item-btn">
                     <button type='button' className="services_page_packages_item-btn-el btn light_gray" onClick={openModal}>
                        <span>подробнее</span>
                        <div className="icon">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M0 7H14" stroke="#121212" />
                              <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                           </svg>
                        </div>
                     </button>
                  </div>
                  <div className="services_page_packages_item-cost">
                     {item.cost}
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}

export default ServicePagePackages;