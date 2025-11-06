
import SectionHead from '../../utilities/SectionHead/SectionHead';
import SectionHeadTitlte from '../../utilities/SectionHead/SectionHeadTitlte';
import SectionHeadIcon from '../../utilities/SectionHead/SectionHeadIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, EffectFade, Navigation, Pagination, Mousewheel } from 'swiper/modules';
import './ReviewsClients.scss'
import 'swiper/css/effect-creative';
import { nanoid } from 'nanoid';
import ReviewBenefit from './ReviewBenefit/ReviewBenefit';

function ReviewsClients({ className, dataToOne, dataToTwo, dataBenefit, dataReviews, titleSection }) {

   return (
      <section className={`rev_client ${className ? className : ''}`}>
         <div className="container">
            <SectionHead>
               <SectionHeadIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width={62} height={62} viewBox="0 0 62 62" fill="none">
                     <rect x={1} y={1} width={60} height={60} rx={12} fill="white" />
                     <rect x={1} y={1} width={60} height={60} rx={12} stroke="#C9C9C9" />
                     <path d="M27 24.6471H21.6667C20.1939 24.6471 19 25.9112 19 27.4706V40.1765C19 41.7359 20.1939 43 21.6667 43H40.3333C41.8061 43 43 41.7359 43 40.1765V27.4706C43 25.9112 41.8061 24.6471 40.3333 24.6471H35M27 24.6471V21.8235C27 20.2641 28.1939 19 29.6667 19H32.3333C33.8061 19 35 20.2641 35 21.8235V24.6471M27 24.6471H35" stroke="#C9C9C9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </SectionHeadIcon>
               <SectionHeadTitlte>
                  {titleSection ? (
                     titleSection
                  ) : (
                     'Отзывы клиентов'
                  )}
               </SectionHeadTitlte>
            </SectionHead>
            <div className="rev_client_wrap">
               <Swiper
                  modules={[EffectFade, Navigation, Pagination, EffectCreative, Mousewheel]}
                  effect="creative"
                  creativeEffect={{
                     prev: {
                        shadow: false,
                        translate: [-160, "0%", -220],
                        limitProgress: 1,
                     },
                     next: {
                        shadow: false,
                        translate: [160, "0%", -220],
                        limitProgress: 1,
                     },
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  className='rev_client_wrap_sw'
                  loop={false}
                  // centeredSlides={true}
                  fadeEffect={{
                     crossFade: true
                  }}
                  speed={600}
                  mousewheel={{
                     forceToAxis: true,
                  }}
                  pagination={{
                     clickable: true,
                     el: '.rev_client_wrap_btns-pagination',
                  }}
                  navigation={{
                     nextEl: '.rev_client_wrap_btns-next',
                     prevEl: '.rev_client_wrap_btns-prev',
                  }}
                  breakpoints={{
                     1: {
                        autoHeight: true,
                        creativeEffect: {
                           prev: {
                              shadow: false,
                              translate: ['-102%', "0%", -0],
                              rotate: [0, 0, 0],
                              scale: 1,
                              limitProgress: 3,
                           },
                           next: {
                              shadow: false,
                              translate: ['102%', "0%", -0],
                              rotate: [0, 0, 0],
                              scale: 1,
                              limitProgress: 3,
                           },
                        }
                     },
                     1200: {
                        autoHeight: false,
                        creativeEffect: {
                           prev: {
                              shadow: false,
                              translate: [-160, "0%", -220],
                              limitProgress: 1,
                           },
                           next: {
                              shadow: false,
                              translate: [160, "0%", -220],
                              limitProgress: 1,
                           },
                        }
                     }
                  }}
               >

                  {dataReviews?.map(item => (
                     <SwiperSlide className='rev_client_wrap_sw_item' key={nanoid()}>
                        <div className="rev_client_wrap_sw_item_author">
                           <div className="rev_client_wrap_sw_item_author-img">
                              <img src={item.people.avatar} alt="Фото клиента" />
                           </div>
                           <div className="rev_client_wrap_sw_item_author-text">
                              <p>
                                 {item.people.text}
                              </p>
                           </div>
                        </div>
                        <div className="rev_client_wrap_sw_item_content">
                           <div className="rev_client_wrap_sw_item_content_wrap">
                              {item.title && (
                                 <div className="rev_client_wrap_sw_item_content-title">
                                    {item.title}
                                 </div>
                              )}
                              <div className="rev_client_wrap_sw_item_content-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
               <div className="rev_client_wrap_btns">
                  <div className="swiper-button-prev rev_client_wrap_btns-prev">
                     <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <rect x="1" y="1" width="60" height="60" rx="12" stroke="#006AFE" />
                        <path d="M22 31H40" stroke="#006AFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31 22L22 31L31 40" stroke="#006AFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
                  <div className="swiper-pagination rev_client_wrap_btns-pagination"></div>
                  <div className="swiper-button-next rev_client_wrap_btns-next">
                     <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <rect x="1" y="1" width="60" height="60" rx="12" stroke="#006AFE" />
                        <path d="M40 31L22 31" stroke="#006AFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31 40L40 31L31 22" stroke="#006AFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
               </div>
            </div>
            {dataBenefit && (
               <ReviewBenefit className={className} dataBenefit={dataBenefit} />
            )}
         </div>
      </section>
   );
}

export default ReviewsClients;