import './ServicePagePackagesModal.scss'
import packagesdata from '../../../assets/packages-data.json'
import { useEffect, useRef } from 'react';

function ServicePagePackagesModal({ isOpen, handleClose }) {
   const headRefs = useRef([]);
   const wrapperRef = useRef(null);

   // Скроллим содержмое в начало при открытии
   useEffect(() => {
      if (isOpen && wrapperRef.current) {
         wrapperRef.current.scrollTop = 0;
      }
   }, [isOpen]);


   // Закрывает модалку по клику вне
   function handleOverlayClick(e) {
      if (e.target.classList.contains('services_page-package_modal')) {
         handleClose();
      }
   }

   const equalizeHeadHeights = () => {
      const headElements = headRefs.current.filter(ref => ref !== null);

      if (headElements.length === 0) return;

      // Сбрасываем высоту
      headElements.forEach(el => {
         el.style.height = 'auto';
      });

      // Находим максимальную высоту
      let maxHeight = 0;
      headElements.forEach(el => {
         const height = el.offsetHeight;
         if (height > maxHeight) {
            maxHeight = height;
         }
      });

      // Применяем максимальную высоту
      headElements.forEach(el => {
         el.style.height = `${maxHeight}px`;
      });
   };

   useEffect(() => {
      // Выравниваем высоту при монтировании компонента
      equalizeHeadHeights();

      // Добавляем обработчик ресайза окна
      const handleResize = () => {
         equalizeHeadHeights();
      };

      window.addEventListener('resize', handleResize);

      // Очищаем обработчик при размонтировании
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   let faqTimers = new WeakMap();

   const handleFaqClick = (e) => {
      if (window.innerWidth <= 1199) {
         const item = e.currentTarget;
         const parentItem = e.target.closest('.services_page-package_modal-item');;
         const content = parentItem.querySelector('.services_page-package_modal-item_content_block');

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
            content.style.transition = '.6s';

            // Считаем целевую высоту
            const targetHeight = content.scrollHeight;

            content.style.height = targetHeight + 'px';

            content.addEventListener('transitionend', function onOpenEnd(ev) {
               if (ev.propertyName === 'height' && parentItem.classList.contains('open')) {
                  content.style.height = '';
                  content.style.transition = '';
                  content.style.overflow = '';
                  content.removeEventListener('transitionend', onOpenEnd);
               }
            });

            item.innerHTML = 'Скрыть описание';

         } else {
            // Закрытие
            const startHeight = content.scrollHeight;
            content.style.height = startHeight + 'px';
            content.style.overflow = 'hidden';
            content.style.transition = '.6s';

            // Принудительный reflow
            void content.offsetHeight;

            content.style.height = '0px';

            content.addEventListener('transitionend', function onCloseEnd(ev) {
               if (ev.propertyName === 'height' && !parentItem.classList.contains('open')) {
                  content.style.display = '';
                  content.style.height = '';
                  content.style.transition = '';
                  content.style.overflow = '';
                  content.removeEventListener('transitionend', onCloseEnd);
               }
            });

            item.innerHTML = 'Показать описание';
         }
      }
   };


   return (
      <div className={`services_page-package_modal ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
         <div className="services_page-package_modal-wrap">
            <div className="services_page-package_modal-title">
               Ежемесячные пакеты услуг
            </div>
            <div className="services_page-package_modal-list row" ref={wrapperRef}>
               {packagesdata.packages.map((item, index) => (
                  <div className="col-xl-3" key={index}>
                     <div className="services_page-package_modal-item">
                        <div
                           className="services_page-package_modal-item_head"
                           ref={el => headRefs.current[index] = el}
                        >
                           <div className="services_page-package_modal-item_head-title">
                              {item.head.title}
                           </div>
                           <div className="services_page-package_modal-item_head-text">
                              <p>{item.head.subtitle}</p>
                           </div>
                           <div className="services_page-package_modal-item_head-cost">
                              {item.head.price}
                           </div>
                           <button type='button' className="services_page-package_modal-item_head-btn" onClick={handleFaqClick}>
                              Показать описание
                           </button>
                        </div>
                        <div className='services_page-package_modal-item_content_block'>
                           <div className="services_page-package_modal-item_content">
                              {item.content.features.map((feature, featureIndex) => (
                                 <p key={featureIndex}>{feature}</p>
                              ))}
                              {item.content.reports.map((report, reportIndex) => (
                                 <div className='services_page-package_modal-item_content-reports' key={reportIndex}>
                                    {report.title}
                                    <ul>
                                       {report.items.map((reportItem, itemIndex) => (
                                          <li key={itemIndex} dangerouslySetInnerHTML={{ __html: reportItem }} />
                                       ))}
                                    </ul>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <button type='button' aria-label='Закрыть окно с таблицей' className="services_page-package_modal-close" onClick={handleClose}>
               <svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} viewBox="0 0 38 38" fill="none">
                  <rect width={38} height={38} rx={19} fill="#F5F5F7" />
                  <path d="M14.0508 23.9512L23.9503 14.0517" stroke="#121212" />
                  <path d="M23.9492 23.9512L14.0497 14.0517" stroke="#121212" />
               </svg>
            </button>
         </div>
      </div>
   );
}

export default ServicePagePackagesModal;