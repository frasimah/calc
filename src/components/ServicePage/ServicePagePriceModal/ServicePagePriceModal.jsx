import './ServicePagePriceModal.scss'
import data from '../../../assets/pricing-tables.json'
import { useEffect, useRef } from 'react';


function ServicePagePriceModal({ tableKey, isOpen, handleClose }) {
   const tableWrapperRef = useRef(null);

   // Скроллим содержмое в начало при открытии
   useEffect(() => {
      if (isOpen && tableWrapperRef.current) {
         tableWrapperRef.current.scrollTop = 0;
      }
   }, [isOpen]);


   // Закрывает модалку по клику вне
   function handleOverlayClick(e) {
      if (e.target.classList.contains('services_page-table_modal')) {
         handleClose();
      }
   }

   return (
      <div className={`services_page-table_modal ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
         <div className="services_page-table_modal-wrap">
            <div className="services_page-table_modal-wrap-title">
               Ценообразование ({data.tables[tableKey].title})
            </div>
            <div className="services_page-table_modal-wrap-table" ref={tableWrapperRef}>
               <table>
                  <thead>
                     <tr>
                        {data.tables[tableKey].headers.map((text, index) => (
                           <th key={index}>{text}</th>
                        ))}
                     </tr>
                  </thead>
                  <tbody className="services_page-table__body">
                     {data.tables[tableKey].rows.map((item, index) => (
                        <tr key={index}>
                           {item.map((text, index) => (
                              <td key={index}>{text}</td>
                           ))}
                        </tr>
                     ))}
                  </tbody>

               </table>
            </div>
            <button type='button' aria-label='Закрыть окно с таблицей' className="services_page-table_modal-wrap-close" onClick={handleClose}>
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

export default ServicePagePriceModal;