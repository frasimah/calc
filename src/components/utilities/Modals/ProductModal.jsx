import React from 'react';
import Modal from 'react-modal';
import './Modals.scss'
import './ProductModal.scss'
import CustomText from '../CustomText/CustomText';
import { useMediaQuery } from 'react-responsive'
import { useTab } from '../../ServicePage/ServicePageTabs/TabContext';
import { Link } from 'react-router-dom';

function ProductModalRetargeting({ product, closeModal }) {

   const { setActiveTab } = useTab();

   const handleTabChange = (tabId) => {
      closeModal()
      setActiveTab(tabId);
   };

   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
   const isTablet = useMediaQuery({ query: '(max-width: 1199px)' });

   const handleHoverLeaver = (e) => {
      if (!isTablet) {
         const item = e.currentTarget;
         const thisCircle = item.querySelector('.product_modal_left-circle');

         if (thisCircle) {
            thisCircle.style.opacity = 0;
         }
      }
   }

   const handleHover = (e) => {
      if (!isTablet) {
         const item = e.currentTarget;
         const rect = item.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;
         const thisCircle = item.querySelector('.product_modal_left-circle')
         if (thisCircle) {
            thisCircle.style.opacity = 1;
            thisCircle.style.left = mouseX + 'px';
            thisCircle.style.top = mouseY + 'px';
         }
      }
   };
   return (
      <div className="product_modal">
         <button type='button' aria-label='Закрыть' className="product_modal-close" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
               <rect width="38" height="38" rx="19" fill="#F5F5F7" />
               <path d="M14.0508 23.9497L23.9503 14.0502" stroke="#121212" />
               <path d="M23.9502 23.9497L14.0507 14.0502" stroke="#121212" />
            </svg>
         </button>
         <div className="product_modal_left" onMouseMove={handleHover} onMouseLeave={handleHoverLeaver}>
            {isMobile &&
               <div className="product_modal_left_mobile">
                  <h3 className="product_modal_left_mobile-title">
                     {product.title}
                  </h3>
                  <Link
                     to='/services'
                     className='product_modal_left-btn'
                     onClick={() => handleTabChange(product.tabId)}
                  >
                     смотреть цены
                     <div className="product_modal_left-icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                           <path d="M0 7H14" stroke="#121212" />
                           <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                        </svg>
                     </div>
                  </Link>
               </div>
            }
            <div className="product_modal_left-image">
               <img src={product.imageSvg} alt="" />
            </div>
            {!isMobile &&
               <Link
                  to='/services'
                  className='product_modal_left-btn'
                  onClick={() => handleTabChange(product.tabId)}
               >
                  смотреть цены
                  <div className="product_modal_left-icon icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M0 7H14" stroke="#121212" />
                        <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                     </svg>
                  </div>
               </Link>
            }
            {!isTablet &&
               <>
                  <div className="product_modal_left-circle"></div>
                  <div className="product_modal_left-circle_static"></div>
               </>
            }
         </div>
         <div className="product_modal_content">
            <div className="product_modal_content_wrap">
               {!isMobile &&
                  <h3 className="product_modal_content-title">
                     {product.title}
                  </h3>
               }
               <CustomText className="product_modal_content-text small">
                  <p>
                     Получаем контактные и поведенческие данные по функциональному коду на сайте рекламодателя
                  </p>
                  <p>
                     Программный продукт для идентификации скрытых пользователей, не совершивших целевое действие на сайте рекламодателя. Передаем данные или квалифицированные колл-центром лиды.
                  </p>
                  <p>Ценности продукта:</p>
                  <ul>
                     <li>
                        Прямая передача обезличенных данных (телефоны, e-mail) в систему рекламодателя
                     </li>
                     <li>
                        Возврат максимального % посетителей сайта в виде квалифицированных лидов для увеличения продаж
                     </li>
                     <li>
                        "Горячие" лиды с подтвержденным интересом к продуктам/услугам
                     </li>
                     <li>
                        Квалификация согласованных с рекламодателем критериев качества целевого обращения (marketing qualified lead - MQL)
                     </li>
                  </ul>
               </CustomText>
            </div>
         </div>
      </div>
   );
}
function ProductModalTarget({ product, closeModal }) {
   const { setActiveTab } = useTab();

   const handleTabChange = (tabId) => {
      closeModal()
      setActiveTab(tabId);
   };

   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
   const isTablet = useMediaQuery({ query: '(max-width: 1199px)' });

   const handleHoverLeaver = (e) => {
      if (!isTablet) {
         const item = e.currentTarget;
         const thisCircle = item.querySelector('.product_modal_left-circle');

         if (thisCircle) {
            thisCircle.style.opacity = 0;
         }
      }
   }

   const handleHover = (e) => {
      if (!isTablet) {
         const item = e.currentTarget;
         const rect = item.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;
         const thisCircle = item.querySelector('.product_modal_left-circle')
         if (thisCircle) {
            thisCircle.style.opacity = 1;
            thisCircle.style.left = mouseX + 'px';
            thisCircle.style.top = mouseY + 'px';
         }
      }
   };
   return (
      <div className="product_modal">
         <button type='button' aria-label='Закрыть' className="product_modal-close" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
               <rect width="38" height="38" rx="19" fill="#F5F5F7" />
               <path d="M14.0508 23.9497L23.9503 14.0502" stroke="#121212" />
               <path d="M23.9502 23.9497L14.0507 14.0502" stroke="#121212" />
            </svg>
         </button>
         <div className="product_modal_left is_left_btn" onMouseMove={handleHover} onMouseLeave={handleHoverLeaver}>
            {isMobile &&
               <div className="product_modal_left_mobile">
                  <h3 className="product_modal_left_mobile-title">
                     {product.title}
                  </h3>
                  <div className="product_modal_left_mobile_bot">
                     <Link
                        to='/services'
                        className='product_modal_left-btn'
                        onClick={() => handleTabChange(product.tabId)}
                     >
                        смотреть цены
                        <div className="product_modal_left-icon icon">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M0 7H14" stroke="#121212" />
                              <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                           </svg>
                        </div>
                     </Link>
                     <a href="./pdf/Target-Data-Driven-Segments.pdf" className='dwn_pdf' target='_blank' rel='nofollow noreferrer'>
                        <span>смотреть презентацию</span>
                        <div className="icon">
                           <svg className='svg_visible' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className='svg_visible-arrow' d="M7.39749 10.2351C7.29547 10.3467 7.1513 10.4103 7.0001 10.4103C6.8489 10.4103 6.70474 10.3467 6.60272 10.2351L3.73091 7.09412C3.53024 6.87465 3.54549 6.53405 3.76497 6.33338C3.98445 6.13272 4.32504 6.14794 4.52571 6.36742L6.46164 8.48486V0.538462C6.46164 0.24108 6.70273 0 7.0001 0C7.29748 0 7.53857 0.24108 7.53857 0.538462V8.48486L9.47451 6.36742C9.67518 6.14794 10.0158 6.13272 10.2353 6.33338C10.4547 6.53405 10.4699 6.87465 10.2693 7.09412L7.39749 10.2351Z" fill="white" />
                              <path d="M1.07692 9.1537C1.07692 8.85632 0.835851 8.61523 0.538462 8.61523C0.24108 8.61523 3.76171e-07 8.85632 3.76171e-07 9.1537V9.19311C-1.39828e-05 10.175 -2.83932e-05 10.9664 0.0836557 11.5888C0.170542 12.2351 0.356412 12.7791 0.788559 13.2113C1.22071 13.6435 1.76482 13.8293 2.41105 13.9162C3.03349 13.9998 3.8249 13.9998 4.80676 13.9998H9.19326C10.1751 13.9998 10.9665 13.9998 11.589 13.9162C12.2352 13.8293 12.7793 13.6435 13.2115 13.2113C13.6436 12.7791 13.8295 12.2351 13.9164 11.5888C14 10.9664 14 10.175 14 9.19311V9.1537C14 8.85632 13.7589 8.61523 13.4615 8.61523C13.1642 8.61523 12.9231 8.85632 12.9231 9.1537C12.9231 10.1842 12.9219 10.903 12.8491 11.4453C12.7782 11.9721 12.6487 12.2511 12.4499 12.4498C12.2512 12.6485 11.9723 12.778 11.4455 12.8489C10.9031 12.9218 10.1844 12.9229 9.15385 12.9229H4.84615C3.8156 12.9229 3.09685 12.9218 2.55455 12.8489C2.02774 12.778 1.74876 12.6485 1.55006 12.4498C1.35136 12.2511 1.22181 11.9721 1.15098 11.4453C1.07806 10.903 1.07692 10.1842 1.07692 9.1537Z" fill="white" />
                           </svg>
                           <svg className='svg_hidden' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className='svg_hidden-arrow' d="M7.39749 10.2351C7.29547 10.3467 7.1513 10.4103 7.0001 10.4103C6.8489 10.4103 6.70474 10.3467 6.60272 10.2351L3.73091 7.09412C3.53024 6.87465 3.54549 6.53405 3.76497 6.33338C3.98445 6.13272 4.32504 6.14794 4.52571 6.36742L6.46164 8.48486V0.538462C6.46164 0.24108 6.70273 0 7.0001 0C7.29748 0 7.53857 0.24108 7.53857 0.538462V8.48486L9.47451 6.36742C9.67518 6.14794 10.0158 6.13272 10.2353 6.33338C10.4547 6.53405 10.4699 6.87465 10.2693 7.09412L7.39749 10.2351Z" fill="white" />
                              <path className='svg_hidden-bot' d="M1.07692 9.1537C1.07692 8.85632 0.835851 8.61523 0.538462 8.61523C0.24108 8.61523 3.76171e-07 8.85632 3.76171e-07 9.1537V9.19311C-1.39828e-05 10.175 -2.83932e-05 10.9664 0.0836557 11.5888C0.170542 12.2351 0.356412 12.7791 0.788559 13.2113C1.22071 13.6435 1.76482 13.8293 2.41105 13.9162C3.03349 13.9998 3.8249 13.9998 4.80676 13.9998H9.19326C10.1751 13.9998 10.9665 13.9998 11.589 13.9162C12.2352 13.8293 12.7793 13.6435 13.2115 13.2113C13.6436 12.7791 13.8295 12.2351 13.9164 11.5888C14 10.9664 14 10.175 14 9.19311V9.1537C14 8.85632 13.7589 8.61523 13.4615 8.61523C13.1642 8.61523 12.9231 8.85632 12.9231 9.1537C12.9231 10.1842 12.9219 10.903 12.8491 11.4453C12.7782 11.9721 12.6487 12.2511 12.4499 12.4498C12.2512 12.6485 11.9723 12.778 11.4455 12.8489C10.9031 12.9218 10.1844 12.9229 9.15385 12.9229H4.84615C3.8156 12.9229 3.09685 12.9218 2.55455 12.8489C2.02774 12.778 1.74876 12.6485 1.55006 12.4498C1.35136 12.2511 1.22181 11.9721 1.15098 11.4453C1.07806 10.903 1.07692 10.1842 1.07692 9.1537Z" fill="white" />
                           </svg>
                        </div>
                     </a>
                  </div>
               </div>
            }
            <div className="product_modal_left-image">
               <img src={product.imageSvg} alt="" />
            </div>
            {!isMobile &&
               <div className='product_modal_left_bot'>
                  <Link
                     to='/services'
                     className='product_modal_left-btn'
                     onClick={() => handleTabChange(product.tabId)}
                  >
                     смотреть цены
                     <div className="product_modal_left-icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                           <path d="M0 7H14" stroke="#121212" />
                           <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                        </svg>
                     </div>
                  </Link>
                  <a href="./pdf/Target-Data-Driven-Segments.pdf" className='dwn_pdf' target='_blank' rel='nofollow noreferrer'>
                     <span>смотреть презентацию</span>
                     <div className="icon">
                        <svg className='svg_visible' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path className='svg_visible-arrow' d="M7.39749 10.2351C7.29547 10.3467 7.1513 10.4103 7.0001 10.4103C6.8489 10.4103 6.70474 10.3467 6.60272 10.2351L3.73091 7.09412C3.53024 6.87465 3.54549 6.53405 3.76497 6.33338C3.98445 6.13272 4.32504 6.14794 4.52571 6.36742L6.46164 8.48486V0.538462C6.46164 0.24108 6.70273 0 7.0001 0C7.29748 0 7.53857 0.24108 7.53857 0.538462V8.48486L9.47451 6.36742C9.67518 6.14794 10.0158 6.13272 10.2353 6.33338C10.4547 6.53405 10.4699 6.87465 10.2693 7.09412L7.39749 10.2351Z" fill="white" />
                           <path d="M1.07692 9.1537C1.07692 8.85632 0.835851 8.61523 0.538462 8.61523C0.24108 8.61523 3.76171e-07 8.85632 3.76171e-07 9.1537V9.19311C-1.39828e-05 10.175 -2.83932e-05 10.9664 0.0836557 11.5888C0.170542 12.2351 0.356412 12.7791 0.788559 13.2113C1.22071 13.6435 1.76482 13.8293 2.41105 13.9162C3.03349 13.9998 3.8249 13.9998 4.80676 13.9998H9.19326C10.1751 13.9998 10.9665 13.9998 11.589 13.9162C12.2352 13.8293 12.7793 13.6435 13.2115 13.2113C13.6436 12.7791 13.8295 12.2351 13.9164 11.5888C14 10.9664 14 10.175 14 9.19311V9.1537C14 8.85632 13.7589 8.61523 13.4615 8.61523C13.1642 8.61523 12.9231 8.85632 12.9231 9.1537C12.9231 10.1842 12.9219 10.903 12.8491 11.4453C12.7782 11.9721 12.6487 12.2511 12.4499 12.4498C12.2512 12.6485 11.9723 12.778 11.4455 12.8489C10.9031 12.9218 10.1844 12.9229 9.15385 12.9229H4.84615C3.8156 12.9229 3.09685 12.9218 2.55455 12.8489C2.02774 12.778 1.74876 12.6485 1.55006 12.4498C1.35136 12.2511 1.22181 11.9721 1.15098 11.4453C1.07806 10.903 1.07692 10.1842 1.07692 9.1537Z" fill="white" />
                        </svg>
                        <svg className='svg_hidden' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path className='svg_hidden-arrow' d="M7.39749 10.2351C7.29547 10.3467 7.1513 10.4103 7.0001 10.4103C6.8489 10.4103 6.70474 10.3467 6.60272 10.2351L3.73091 7.09412C3.53024 6.87465 3.54549 6.53405 3.76497 6.33338C3.98445 6.13272 4.32504 6.14794 4.52571 6.36742L6.46164 8.48486V0.538462C6.46164 0.24108 6.70273 0 7.0001 0C7.29748 0 7.53857 0.24108 7.53857 0.538462V8.48486L9.47451 6.36742C9.67518 6.14794 10.0158 6.13272 10.2353 6.33338C10.4547 6.53405 10.4699 6.87465 10.2693 7.09412L7.39749 10.2351Z" fill="white" />
                           <path className='svg_hidden-bot' d="M1.07692 9.1537C1.07692 8.85632 0.835851 8.61523 0.538462 8.61523C0.24108 8.61523 3.76171e-07 8.85632 3.76171e-07 9.1537V9.19311C-1.39828e-05 10.175 -2.83932e-05 10.9664 0.0836557 11.5888C0.170542 12.2351 0.356412 12.7791 0.788559 13.2113C1.22071 13.6435 1.76482 13.8293 2.41105 13.9162C3.03349 13.9998 3.8249 13.9998 4.80676 13.9998H9.19326C10.1751 13.9998 10.9665 13.9998 11.589 13.9162C12.2352 13.8293 12.7793 13.6435 13.2115 13.2113C13.6436 12.7791 13.8295 12.2351 13.9164 11.5888C14 10.9664 14 10.175 14 9.19311V9.1537C14 8.85632 13.7589 8.61523 13.4615 8.61523C13.1642 8.61523 12.9231 8.85632 12.9231 9.1537C12.9231 10.1842 12.9219 10.903 12.8491 11.4453C12.7782 11.9721 12.6487 12.2511 12.4499 12.4498C12.2512 12.6485 11.9723 12.778 11.4455 12.8489C10.9031 12.9218 10.1844 12.9229 9.15385 12.9229H4.84615C3.8156 12.9229 3.09685 12.9218 2.55455 12.8489C2.02774 12.778 1.74876 12.6485 1.55006 12.4498C1.35136 12.2511 1.22181 11.9721 1.15098 11.4453C1.07806 10.903 1.07692 10.1842 1.07692 9.1537Z" fill="white" />
                        </svg>

                     </div>
                  </a>
               </div>
            }
            {!isTablet &&
               <>
                  <div className="product_modal_left-circle"></div>
                  <div className="product_modal_left-circle_static"></div>
               </>
            }
         </div>
         <div className="product_modal_content is_left_btn">
            <div className="product_modal_content_wrap">
               {!isMobile &&
                  <h3 className="product_modal_content-title">
                     {product.title}
                  </h3>
               }
               <CustomText className="product_modal_content-text small">
                  <p>
                     Подбираем аудиторию по всей вертикали отечественного онлайн спроса на продукты/услуги рекламодателя через DMP фильтрацию собственной Big Data
                  </p>
                  <p>
                     Программный продукт идентификации дополнительной аудитории, схожей по интересам и поведенческими характеристикам с посетителями цифровых площадок рекламодателя. Передаем данные или квалифицированные колл-центром лиды.
                  </p>
                  <p>Ценности продукта:</p>
                  <ul>
                     <li>
                        Привлечение “теплых” клиентов на основе метода look-a-like, без установки кода на сайт
                     </li>
                     <li>
                        Дополнительный источник заинтересованных пользователей
                     </li>
                     <li>
                        Прямая передача обезличенных данных (телефон, email) в СRM-систему клиента
                     </li>
                     <li>
                        Снижение стоимости привлечения целевого лида
                     </li>
                  </ul>
               </CustomText>
            </div>
         </div>
      </div>
   );
}
function ProductModalCall({ product, closeModal }) {
   const { setActiveTab } = useTab();

   const handleTabChange = (tabId) => {
      closeModal()
      setActiveTab(tabId);
   };
   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
   const isTablet = useMediaQuery({ query: '(max-width: 1199px)' });

   const handleHoverLeaver = (e) => {
      if (!isTablet) {
         const item = e.currentTarget;
         const thisCircle = item.querySelector('.product_modal_left-circle');

         if (thisCircle) {
            thisCircle.style.opacity = 0;
         }
      }
   }

   const handleHover = (e) => {
      if (!isTablet) {
         const item = e.currentTarget;
         const rect = item.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;
         const thisCircle = item.querySelector('.product_modal_left-circle')
         if (thisCircle) {
            thisCircle.style.opacity = 1;
            thisCircle.style.left = mouseX + 'px';
            thisCircle.style.top = mouseY + 'px';
         }
      }
   };
   return (
      <div className="product_modal">
         <button type='button' aria-label='Закрыть' className="product_modal-close" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
               <rect width="38" height="38" rx="19" fill="#F5F5F7" />
               <path d="M14.0508 23.9497L23.9503 14.0502" stroke="#121212" />
               <path d="M23.9502 23.9497L14.0507 14.0502" stroke="#121212" />
            </svg>
         </button>
         <div className="product_modal_left is_left_btn" onMouseMove={handleHover} onMouseLeave={handleHoverLeaver}>
            {isMobile &&
               <div className="product_modal_left_mobile">
                  <h3 className="product_modal_left_mobile-title">
                     {product.title}
                  </h3>
                  <div className="product_modal_left_mobile_bot">
                     <Link
                        to='/services'
                        className='product_modal_left-btn'
                        onClick={() => handleTabChange(product.tabId)}
                     >
                        смотреть цены
                        <div className="product_modal_left-icon icon">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M0 7H14" stroke="#121212" />
                              <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                           </svg>
                        </div>
                     </Link>
                     <a href="./pdf/Call-center-telephony.pdf" className='dwn_pdf' target='_blank' rel='nofollow noreferrer'>
                        <span>смотреть презентацию</span>
                        <div className="icon">
                           <svg className='svg_visible' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className='svg_visible-arrow' d="M7.39749 10.2351C7.29547 10.3467 7.1513 10.4103 7.0001 10.4103C6.8489 10.4103 6.70474 10.3467 6.60272 10.2351L3.73091 7.09412C3.53024 6.87465 3.54549 6.53405 3.76497 6.33338C3.98445 6.13272 4.32504 6.14794 4.52571 6.36742L6.46164 8.48486V0.538462C6.46164 0.24108 6.70273 0 7.0001 0C7.29748 0 7.53857 0.24108 7.53857 0.538462V8.48486L9.47451 6.36742C9.67518 6.14794 10.0158 6.13272 10.2353 6.33338C10.4547 6.53405 10.4699 6.87465 10.2693 7.09412L7.39749 10.2351Z" fill="white" />
                              <path d="M1.07692 9.1537C1.07692 8.85632 0.835851 8.61523 0.538462 8.61523C0.24108 8.61523 3.76171e-07 8.85632 3.76171e-07 9.1537V9.19311C-1.39828e-05 10.175 -2.83932e-05 10.9664 0.0836557 11.5888C0.170542 12.2351 0.356412 12.7791 0.788559 13.2113C1.22071 13.6435 1.76482 13.8293 2.41105 13.9162C3.03349 13.9998 3.8249 13.9998 4.80676 13.9998H9.19326C10.1751 13.9998 10.9665 13.9998 11.589 13.9162C12.2352 13.8293 12.7793 13.6435 13.2115 13.2113C13.6436 12.7791 13.8295 12.2351 13.9164 11.5888C14 10.9664 14 10.175 14 9.19311V9.1537C14 8.85632 13.7589 8.61523 13.4615 8.61523C13.1642 8.61523 12.9231 8.85632 12.9231 9.1537C12.9231 10.1842 12.9219 10.903 12.8491 11.4453C12.7782 11.9721 12.6487 12.2511 12.4499 12.4498C12.2512 12.6485 11.9723 12.778 11.4455 12.8489C10.9031 12.9218 10.1844 12.9229 9.15385 12.9229H4.84615C3.8156 12.9229 3.09685 12.9218 2.55455 12.8489C2.02774 12.778 1.74876 12.6485 1.55006 12.4498C1.35136 12.2511 1.22181 11.9721 1.15098 11.4453C1.07806 10.903 1.07692 10.1842 1.07692 9.1537Z" fill="white" />
                           </svg>
                           <svg className='svg_hidden' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className='svg_hidden-arrow' d="M7.39749 10.2351C7.29547 10.3467 7.1513 10.4103 7.0001 10.4103C6.8489 10.4103 6.70474 10.3467 6.60272 10.2351L3.73091 7.09412C3.53024 6.87465 3.54549 6.53405 3.76497 6.33338C3.98445 6.13272 4.32504 6.14794 4.52571 6.36742L6.46164 8.48486V0.538462C6.46164 0.24108 6.70273 0 7.0001 0C7.29748 0 7.53857 0.24108 7.53857 0.538462V8.48486L9.47451 6.36742C9.67518 6.14794 10.0158 6.13272 10.2353 6.33338C10.4547 6.53405 10.4699 6.87465 10.2693 7.09412L7.39749 10.2351Z" fill="white" />
                              <path className='svg_hidden-bot' d="M1.07692 9.1537C1.07692 8.85632 0.835851 8.61523 0.538462 8.61523C0.24108 8.61523 3.76171e-07 8.85632 3.76171e-07 9.1537V9.19311C-1.39828e-05 10.175 -2.83932e-05 10.9664 0.0836557 11.5888C0.170542 12.2351 0.356412 12.7791 0.788559 13.2113C1.22071 13.6435 1.76482 13.8293 2.41105 13.9162C3.03349 13.9998 3.8249 13.9998 4.80676 13.9998H9.19326C10.1751 13.9998 10.9665 13.9998 11.589 13.9162C12.2352 13.8293 12.7793 13.6435 13.2115 13.2113C13.6436 12.7791 13.8295 12.2351 13.9164 11.5888C14 10.9664 14 10.175 14 9.19311V9.1537C14 8.85632 13.7589 8.61523 13.4615 8.61523C13.1642 8.61523 12.9231 8.85632 12.9231 9.1537C12.9231 10.1842 12.9219 10.903 12.8491 11.4453C12.7782 11.9721 12.6487 12.2511 12.4499 12.4498C12.2512 12.6485 11.9723 12.778 11.4455 12.8489C10.9031 12.9218 10.1844 12.9229 9.15385 12.9229H4.84615C3.8156 12.9229 3.09685 12.9218 2.55455 12.8489C2.02774 12.778 1.74876 12.6485 1.55006 12.4498C1.35136 12.2511 1.22181 11.9721 1.15098 11.4453C1.07806 10.903 1.07692 10.1842 1.07692 9.1537Z" fill="white" />
                           </svg>
                        </div>
                     </a>
                  </div>
               </div>
            }
            <div className="product_modal_left-image">
               <img src={product.imageSvg} alt="" />
            </div>
            {!isMobile &&
               <div className='product_modal_left_bot'>
                  <Link
                     to='/services'
                     className='product_modal_left-btn'
                     onClick={() => handleTabChange(product.tabId)}
                  >
                     смотреть цены
                     <div className="product_modal_left-icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                           <path d="M0 7H14" stroke="#121212" />
                           <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                        </svg>
                     </div>
                  </Link>
                  <a href="./pdf/Call-center-telephony.pdf" className='dwn_pdf' target='_blank' rel='nofollow noreferrer'>
                     <span>смотреть презентацию</span>
                     <div className="icon">
                        <svg className='svg_visible' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path className='svg_visible-arrow' d="M7.39749 10.2351C7.29547 10.3467 7.1513 10.4103 7.0001 10.4103C6.8489 10.4103 6.70474 10.3467 6.60272 10.2351L3.73091 7.09412C3.53024 6.87465 3.54549 6.53405 3.76497 6.33338C3.98445 6.13272 4.32504 6.14794 4.52571 6.36742L6.46164 8.48486V0.538462C6.46164 0.24108 6.70273 0 7.0001 0C7.29748 0 7.53857 0.24108 7.53857 0.538462V8.48486L9.47451 6.36742C9.67518 6.14794 10.0158 6.13272 10.2353 6.33338C10.4547 6.53405 10.4699 6.87465 10.2693 7.09412L7.39749 10.2351Z" fill="white" />
                           <path d="M1.07692 9.1537C1.07692 8.85632 0.835851 8.61523 0.538462 8.61523C0.24108 8.61523 3.76171e-07 8.85632 3.76171e-07 9.1537V9.19311C-1.39828e-05 10.175 -2.83932e-05 10.9664 0.0836557 11.5888C0.170542 12.2351 0.356412 12.7791 0.788559 13.2113C1.22071 13.6435 1.76482 13.8293 2.41105 13.9162C3.03349 13.9998 3.8249 13.9998 4.80676 13.9998H9.19326C10.1751 13.9998 10.9665 13.9998 11.589 13.9162C12.2352 13.8293 12.7793 13.6435 13.2115 13.2113C13.6436 12.7791 13.8295 12.2351 13.9164 11.5888C14 10.9664 14 10.175 14 9.19311V9.1537C14 8.85632 13.7589 8.61523 13.4615 8.61523C13.1642 8.61523 12.9231 8.85632 12.9231 9.1537C12.9231 10.1842 12.9219 10.903 12.8491 11.4453C12.7782 11.9721 12.6487 12.2511 12.4499 12.4498C12.2512 12.6485 11.9723 12.778 11.4455 12.8489C10.9031 12.9218 10.1844 12.9229 9.15385 12.9229H4.84615C3.8156 12.9229 3.09685 12.9218 2.55455 12.8489C2.02774 12.778 1.74876 12.6485 1.55006 12.4498C1.35136 12.2511 1.22181 11.9721 1.15098 11.4453C1.07806 10.903 1.07692 10.1842 1.07692 9.1537Z" fill="white" />
                        </svg>
                        <svg className='svg_hidden' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path className='svg_hidden-arrow' d="M7.39749 10.2351C7.29547 10.3467 7.1513 10.4103 7.0001 10.4103C6.8489 10.4103 6.70474 10.3467 6.60272 10.2351L3.73091 7.09412C3.53024 6.87465 3.54549 6.53405 3.76497 6.33338C3.98445 6.13272 4.32504 6.14794 4.52571 6.36742L6.46164 8.48486V0.538462C6.46164 0.24108 6.70273 0 7.0001 0C7.29748 0 7.53857 0.24108 7.53857 0.538462V8.48486L9.47451 6.36742C9.67518 6.14794 10.0158 6.13272 10.2353 6.33338C10.4547 6.53405 10.4699 6.87465 10.2693 7.09412L7.39749 10.2351Z" fill="white" />
                           <path className='svg_hidden-bot' d="M1.07692 9.1537C1.07692 8.85632 0.835851 8.61523 0.538462 8.61523C0.24108 8.61523 3.76171e-07 8.85632 3.76171e-07 9.1537V9.19311C-1.39828e-05 10.175 -2.83932e-05 10.9664 0.0836557 11.5888C0.170542 12.2351 0.356412 12.7791 0.788559 13.2113C1.22071 13.6435 1.76482 13.8293 2.41105 13.9162C3.03349 13.9998 3.8249 13.9998 4.80676 13.9998H9.19326C10.1751 13.9998 10.9665 13.9998 11.589 13.9162C12.2352 13.8293 12.7793 13.6435 13.2115 13.2113C13.6436 12.7791 13.8295 12.2351 13.9164 11.5888C14 10.9664 14 10.175 14 9.19311V9.1537C14 8.85632 13.7589 8.61523 13.4615 8.61523C13.1642 8.61523 12.9231 8.85632 12.9231 9.1537C12.9231 10.1842 12.9219 10.903 12.8491 11.4453C12.7782 11.9721 12.6487 12.2511 12.4499 12.4498C12.2512 12.6485 11.9723 12.778 11.4455 12.8489C10.9031 12.9218 10.1844 12.9229 9.15385 12.9229H4.84615C3.8156 12.9229 3.09685 12.9218 2.55455 12.8489C2.02774 12.778 1.74876 12.6485 1.55006 12.4498C1.35136 12.2511 1.22181 11.9721 1.15098 11.4453C1.07806 10.903 1.07692 10.1842 1.07692 9.1537Z" fill="white" />
                        </svg>

                     </div>
                  </a>
               </div>
            }
            {!isTablet &&
               <>
                  <div className="product_modal_left-circle"></div>
                  <div className="product_modal_left-circle_static"></div>
               </>
            }
         </div>
         <div className="product_modal_content is_left_btn">
            <div className="product_modal_content_wrap">
               {!isMobile &&
                  <h3 className="product_modal_content-title">
                     {product.title}
                  </h3>
               }
               <CustomText className="product_modal_content-text small">
                  <p>
                     Обходим спам-фильтры операторов и обеспечиваем максимально возможный (до 90%) показатель эффективности дозвона до заинтересованных потенциальных потребителей
                  </p>
                  <p>
                     Собственный технологичный колл-центр со специально обученными операторами с выделенными по компетенциям командами:
                  </p>
                  <ul>
                     <li>Validation оптимизирует ресурсы отдела продаж на обработку и квалификацию заявок</li>
                     <li>
                        Reactivation возвращает в воронку от 5 до 20% потребителей со статусом отказа от сделки
                     </li>
                     <li>
                        CRM quality технологически усиливает проработку контактов из CRM со статусом недозвона и увеличивает конверсии от полученных заявок в QL на 20% от текущих показателей
                     </li>
                     <li>
                        Castomer quiz проводит массовые опросы: CSAT, CES, NPS и другие метрики клиентского опыта
                     </li>
                  </ul>
                  <p>Ценности продукта:</p>
                  <ul>
                     <li>
                        Специально обученные операторы с диалоговой гибкостью в рамках согласованного скрипта
                     </li>
                     <li>
                        Преодоление фильтров операторов собственными технологическими разработками
                     </li>
                     <li>
                        Низкий показатель брака и/или слитых лидов
                     </li>
                     <li>
                        Возможность увеличения количества продаж, без привлечения новой аудитории
                     </li>
                     <li>
                        Возможность совершить повторную продажу уже действующему клиенту рекламодателя
                     </li>
                     <li>
                        Высокая скорость обработки заявок и возможность оптимизации нагрузки
                     </li>
                  </ul>
               </CustomText>
            </div>
         </div>
      </div>
   );
}
function ProductModalData({ product, closeModal }) {
   const { setActiveTab } = useTab();

   const handleTabChange = (tabId) => {
      closeModal()
      setActiveTab(tabId);
   };

   const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
   const isTablet = useMediaQuery({ query: '(max-width: 1199px)' });

   const handleHoverLeaver = (e) => {
      if (!isTablet) {
         const item = e.currentTarget;
         const thisCircle = item.querySelector('.product_modal_left-circle');

         if (thisCircle) {
            thisCircle.style.opacity = 0;
         }
      }
   }

   const handleHover = (e) => {
      if (!isTablet) {
         const item = e.currentTarget;
         const rect = item.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;
         const thisCircle = item.querySelector('.product_modal_left-circle')
         if (thisCircle) {
            thisCircle.style.opacity = 1;
            thisCircle.style.left = mouseX + 'px';
            thisCircle.style.top = mouseY + 'px';
         }
      }
   };
   return (
      <div className="product_modal">
         <button type='button' aria-label='Закрыть' className="product_modal-close" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
               <rect width="38" height="38" rx="19" fill="#F5F5F7" />
               <path d="M14.0508 23.9497L23.9503 14.0502" stroke="#121212" />
               <path d="M23.9502 23.9497L14.0507 14.0502" stroke="#121212" />
            </svg>
         </button>
         <div className="product_modal_left" onMouseMove={handleHover} onMouseLeave={handleHoverLeaver}>
            {isMobile &&
               <div className="product_modal_left_mobile">
                  <h3 className="product_modal_left_mobile-title">
                     {product.title}
                  </h3>
                  <Link
                     to='/services'
                     className='product_modal_left-btn'
                     onClick={() => handleTabChange(product.tabId)}
                  >
                     смотреть цены
                     <div className="product_modal_left-icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                           <path d="M0 7H14" stroke="#121212" />
                           <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                        </svg>
                     </div>
                  </Link>
               </div>
            }
            <div className="product_modal_left-image">
               <img src={product.imageSvg} alt="" />
            </div>
            {!isMobile &&
               <Link
                  to='/services'
                  className='product_modal_left-btn'
                  onClick={() => handleTabChange(product.tabId)}
               >
                  смотреть цены
                  <div className="product_modal_left-icon icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M0 7H14" stroke="#121212" />
                        <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                     </svg>
                  </div>
               </Link>
            }
            {!isTablet &&
               <>
                  <div className="product_modal_left-circle"></div>
                  <div className="product_modal_left-circle_static"></div>
               </>
            }
         </div>
         <div className="product_modal_content">
            <div className="product_modal_content_wrap">
               {!isMobile &&
                  <h3 className="product_modal_content-title">
                     {product.title}
                  </h3>
               }
               <CustomText className="product_modal_content-text small">
                  <p>
                     Обогащаем клиентские карточки в базе CRM заказчика контактными данными и данными о заинтересованности в продукте или услуге
                  </p>
                  <p>
                     Посредством сопоставления контактов из CRM рекламодателя с нашей Big Data, выявляем пересекающиеся значения и дополняем карточки недостающими атрибутами (телефон, e-mail, история посещений сайтов и страниц, источники перехода, GEO и др. )
                  </p>
                  <p>Ценности продукта:</p>
                  <ul>
                     <li>
                        Выбор и масштабирование эффективных каналов коммуникации с клиентами
                     </li>
                     <li>
                        Повышение эффективности CRM-маркетинга
                     </li>
                     <li>
                        Получение актуальных "твердых" идентификаторов (телефоны, e-mail)
                     </li>
                     <li>
                        Увеличение точности и персонализации маркетинговых кампаний
                     </li>
                  </ul>
               </CustomText>
            </div>
         </div>
      </div>
   );
}
Modal.setAppElement('#root');

function ProductModal({ isOpen, onRequestClose, content }) {

   return (
      <Modal
         closeTimeoutMS={400}
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         contentLabel="Product Details"
         className={'custom_content'}
         overlayClassName={'custom_overlay'}
         shouldReturnFocusAfterClose={false}

      >
         {content.modal === 'retargeting' &&
            <ProductModalRetargeting product={content} closeModal={onRequestClose} />
         }
         {content.modal === 'target' &&
            <ProductModalTarget product={content} closeModal={onRequestClose} />
         }
         {content.modal === 'call' &&
            <ProductModalCall product={content} closeModal={onRequestClose} />
         }
         {content.modal === 'data' &&
            <ProductModalData product={content} closeModal={onRequestClose} />
         }
      </Modal>
   );
}

export default ProductModal;