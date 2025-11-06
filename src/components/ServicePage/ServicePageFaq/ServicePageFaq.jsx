import './ServicePageFaq.scss'
import FormModal from '../../utilities/Modals/FormModal/FormModal';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');

function ServicePageFaq({ data, openModal }) {
   const [modalIsOpen, setIsOpen] = useState(false);
   const [modalContent, setModalContent] = useState({});

   function openContactModal(product) {
      setModalContent(product);
      setIsOpen(true);
   }

   function closeModal() {
      setIsOpen(false);
   }

   let faqTimers = new WeakMap();

   const handleFaqClick = (e) => {
      const item = e.currentTarget;
      const parentItem = item.closest('.services_page_faq_list_el');
      const content = parentItem.querySelector('.services_page_faq_list_el-content');
      const style = getComputedStyle(content);
      const marginTop = parseFloat(style.marginTop);
      const marginBottom = parseFloat(style.marginBottom);

      // Отменяем прошлые таймеры (если есть)
      if (faqTimers.has(content)) {
         faqTimers.get(content).forEach(clearTimeout);
      }
      faqTimers.set(content, []);

      const open = !parentItem.classList.contains('open');
      parentItem.classList.toggle('open', open);

      if (open) {
         // Открытие
         content.style.display = 'block';
         content.style.overflow = 'hidden';
         content.style.height = '0px';
         content.style.marginTop = '0px';
         content.style.marginBottom = '0px';
         content.style.transition = '.6s';

         // Считаем целевую высоту
         const targetHeight = content.scrollHeight;

         content.style.height = targetHeight + 'px';
         content.style.marginTop = marginTop + 'px';
         content.style.marginBottom = marginBottom + 'px';

         content.addEventListener('transitionend', function onOpenEnd(ev) {
            if (ev.propertyName === 'height' && parentItem.classList.contains('open')) {
               content.style.height = '';
               content.style.transition = '';
               content.style.overflow = '';
               content.style.marginTop = '';
               content.style.marginBottom = '';
               content.removeEventListener('transitionend', onOpenEnd);
            }
         });
      } else {
         // Закрытие
         const startHeight = content.scrollHeight;
         content.style.height = startHeight + 'px';
         content.style.overflow = 'hidden';
         content.style.transition = '.6s';

         // Принудительный reflow
         void content.offsetHeight;

         content.style.height = '0px';
         content.style.marginTop = '0px';
         content.style.marginBottom = '0px';

         content.addEventListener('transitionend', function onCloseEnd(ev) {
            if (ev.propertyName === 'height' && !parentItem.classList.contains('open')) {
               content.style.display = 'none';
               content.style.height = '';
               content.style.transition = '';
               content.style.overflow = '';
               content.style.marginTop = '';
               content.style.marginBottom = '';
               content.removeEventListener('transitionend', onCloseEnd);
            }
         });
      }
   };

   return (
      <>
         <section className="services_page_faq">
            <div className="services_page_faq-head_icon">
               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M1.5 34.2012C2.32843 34.2012 3 34.8727 3 35.7012C3 41.1173 3.00354 45.0286 3.4043 48.0098C3.7993 50.9478 4.55515 52.7573 5.89942 54.1016C7.24377 55.4459 9.05317 56.2026 11.9912 56.5977C14.9723 56.9984 18.8837 57.001 24.2998 57.001C25.1281 57.001 25.7997 57.6727 25.7998 58.501C25.7998 59.3294 25.1282 60.001 24.2998 60.001C18.9683 60.001 14.8183 60.0043 11.5908 59.5703C8.52474 59.158 6.09449 58.3294 4.15918 56.584L3.77832 56.2227C1.78376 54.2281 0.870398 51.6807 0.430665 48.4102C-0.00326959 45.1826 7.21079e-07 41.0327 7.21079e-07 35.7012C7.21079e-07 34.8727 0.671574 34.2012 1.5 34.2012ZM58.499 34.2012C59.3274 34.2012 59.999 34.8727 59.999 35.7012C59.999 41.0327 60.0023 45.1826 59.5684 48.4102C59.1286 51.6808 58.2154 54.2281 56.2207 56.2227C54.2262 58.2173 51.6788 59.1306 48.4082 59.5703C45.1806 60.0043 41.0308 60.001 35.6992 60.001C34.8708 60.001 34.1992 59.3294 34.1992 58.501C34.1994 57.6727 34.8709 57.001 35.6992 57.001C41.1153 57.001 45.0267 56.9984 48.0078 56.5977C50.9459 56.2026 52.7554 55.4459 54.0996 54.1016C55.4439 52.7573 56.2007 50.9478 56.5957 48.0098C56.9965 45.0286 56.999 41.1172 56.999 35.7012C56.999 34.8728 57.6707 34.2013 58.499 34.2012ZM24.2998 7.21079e-07C25.1282 9.26633e-05 25.7998 0.67163 25.7998 1.5C25.7997 2.32826 25.1281 2.99991 24.2998 3C18.8837 3 14.9723 3.00353 11.9912 3.4043C9.05316 3.79931 7.24377 4.55507 5.89942 5.89942C4.5551 7.24377 3.7993 9.05319 3.4043 11.9912C3.00354 14.9723 3 18.8837 3 24.2998C2.99987 25.1281 2.32827 25.7997 1.5 25.7998C0.671655 25.7998 0.000132277 25.1281 7.21079e-07 24.2998C6.14083e-07 18.9684 -0.00323325 14.8183 0.430665 11.5908C0.87042 8.32032 1.78379 5.77289 3.77832 3.77832C5.77289 1.78377 8.3203 0.870423 11.5908 0.430665C14.8183 -0.00324429 18.9684 6.14085e-07 24.2998 7.21079e-07ZM35.6992 7.21079e-07C41.0308 7.21079e-07 45.1806 -0.00326959 48.4082 0.430665C51.6788 0.870398 54.2262 1.78376 56.2207 3.77832L56.582 4.15918C58.3274 6.09449 59.1561 8.52474 59.5684 11.5908C60.0023 14.8183 59.999 18.9683 59.999 24.2998C59.999 25.1282 59.3274 25.7998 58.499 25.7998C57.6707 25.7997 56.999 25.1281 56.999 24.2998C56.999 18.8837 56.9965 14.9723 56.5957 11.9912C56.2007 9.05317 55.444 7.24377 54.0996 5.89942C52.7554 4.55515 50.9459 3.7993 48.0078 3.4043C45.0266 3.00354 41.1153 3 35.6992 3C34.8708 3 34.1992 2.32843 34.1992 1.5C34.1992 0.671574 34.8708 7.21079e-07 35.6992 7.21079e-07Z" fill="#C9C9C9" />
                  <path d="M28.8447 35.5955C29.7968 35.5955 30.2383 34.9331 30.2383 34.0499V33.5806C30.266 31.7589 30.9284 31 33.1364 29.4826C35.4962 27.8811 37 26.0323 37 23.3687C37 19.2289 33.6333 16.8555 29.4517 16.8555C26.3329 16.8555 23.5868 18.3322 22.4139 20.9952C22.1242 21.6441 22 22.2788 22 22.8028C22 23.5895 22.4551 24.1417 23.2971 24.1417C24.0007 24.1417 24.47 23.7278 24.6772 23.0513C25.3944 20.4294 27.1195 19.4361 29.3552 19.4361C32.0459 19.4361 34.1438 20.954 34.1438 23.3551C34.1438 25.3281 32.9156 26.4321 31.1492 27.6745C28.9825 29.1788 27.3957 30.7933 27.3957 33.222V34.0911C27.3957 34.9743 27.8791 35.5955 28.8447 35.5955ZM28.8441 43.1437C29.9339 43.1437 30.8036 42.2606 30.8036 41.1842C30.805 40.9265 30.7553 40.6711 30.6573 40.4327C30.5593 40.1944 30.415 39.9778 30.2328 39.7955C30.0506 39.6133 29.834 39.469 29.5956 39.3711C29.3572 39.2731 29.1018 39.2234 28.8441 39.2248C27.7678 39.2248 26.8705 40.0944 26.8705 41.1842C26.8705 42.2606 27.7678 43.1437 28.8441 43.1437Z" fill="#C9C9C9" />
               </svg>
            </div>
            <div className="row">
               <div className="col-xl-2">
                  <h2 className='services_page_faq-title'>FAQ</h2>
               </div>
               <div className="col-xl-8">
                  <div className="services_page_faq_list">
                     {data.faq.map((item, index) => (
                        <div className="services_page_faq_list_el" key={index} >
                           <div className="services_page_faq_list_el_head" onClick={handleFaqClick}>
                              <h3 className='services_page_faq_list_el_head-title'>
                                 {item.question}
                              </h3>
                              <div className="services_page_faq_list_el_head-icon">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                    <rect width="38" height="38" rx="19" fill="#F5F5F7" />
                                    <path d="M13 17L18.2929 22.2929C18.6834 22.6834 19.3166 22.6834 19.7071 22.2929L25 17" stroke="#353535" strokeWidth="1.4" strokeLinecap="round" />
                                 </svg>
                              </div>
                           </div>
                           <div className="services_page_faq_list_el-content" >
                              <div dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                              {item.isBtnPackages && (
                                 <button type='button' className="btn light_gray" style={{ marginTop: '16px' }} onClick={openModal}>Выбрать пакет услуг</button>
                              )}
                              {item.isBtnContact && (
                                 <button type='button' className="btn light_gray" style={{ marginTop: '16px' }} onClick={openContactModal}>Рассчитать стоимость</button>
                              )}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
         <FormModal isOpen={modalIsOpen} onRequestClose={closeModal} content={modalContent} />
      </>
   );
}

export default ServicePageFaq;