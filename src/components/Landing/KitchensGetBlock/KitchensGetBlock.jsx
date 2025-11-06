import { Swiper, SwiperSlide } from 'swiper/react';
import './KitchensGetBlock.scss'
import Modal from 'react-modal';
import FormModal from '../../utilities/Modals/FormModal/FormModal';
import { useState } from 'react';

Modal.setAppElement('#root');
function KitchensGetBlock({ content }) {
   const [modalIsOpen, setIsOpen] = useState(false);
   const [modalContent, setModalContent] = useState({});

   function openModal(product) {
      setModalContent(product);
      setIsOpen(true);
   }

   function closeModal() {
      setIsOpen(false);
   }

   return (
      <section className='kitchens_get'>
         <div className="container">
            <Swiper
               className='kitchens_get-sw'
               slidesPerView={3}
               spaceBetween={20}
               speed={600}
               breakpoints={{
                  1: {
                     spaceBetween: 7,
                     slidesPerView: 'auto'
                  },
                  1200: {
                     slidesPerView: 3,
                     spaceBetween: 20,
                  }
               }}
            >
               {content?.map((item, index) => (
                  <SwiperSlide key={index}>
                     <div className="kitchens_get_el">
                        <div className="kitchens_get_el_head">
                           {item?.head?.iconIsImage ? (
                              <div className="kitchens_get_el_head-icon">
                                 <img src={item?.head?.icon} alt="" />
                              </div>
                           ) : (
                              <div className="kitchens_get_el_head-icon" dangerouslySetInnerHTML={{ __html: item.head.icon }} />
                           )}
                           <div className="kitchens_get_el_head-title">{item.head.title}</div>
                        </div>
                        <div className="kitchens_get_el_content">
                           <div className={`kitchens_get_el_content-text `}>
                              <ul className={`${item.contentIsNumber ? 'number' : ''}`}>
                                 {item?.content?.map((el, index) => (
                                    <li key={index}>{el}</li>
                                 ))}
                              </ul>
                           </div>
                           <div className="kitchens_get_el_content-btn" >
                              <button type="button" aria-label="Открыть таблицу стоимости" className="kitchens_get_el_content-btn-el btn light_gray" onClick={openModal}>
                                 <span>Оставить заявку</span>
                                 <div className="kitchens_get_el_content-btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                       <path d="M0 7H14" stroke="#121212" />
                                       <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                                    </svg>
                                 </div>
                              </button>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
         <FormModal isOpen={modalIsOpen} onRequestClose={closeModal} content={modalContent} />
      </section>
   );
}

export default KitchensGetBlock;