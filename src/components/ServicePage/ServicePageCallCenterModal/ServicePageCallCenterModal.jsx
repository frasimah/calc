import './ServicePageCallCenterModal.scss'

function ServicePageCallCenterModal({ isOpen, handleClose }) {

   function handleOverlayClick(e) {
      if (e.target.classList.contains('services_page-call_modal')) {
         handleClose();
      }
   }
   return (
      <div className={`services_page-call_modal ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
         <div className="services_page-call_modal-wrap">
            <div className="services_page-call_modal-title">
               Вариант 1 - выкуп минут (аутсорс)
            </div>
            <div className="services_page-call_modal-content">
               <p>Базовая стоимость 1 минуты – 25 руб</p>
               <p>От 15000 до 30000 мин в мес. –  23,5 руб. </p>
               <p>От 30000 до 50000 мин в мес. –  21,5 руб. </p>
               <p>От 50000 мин в мес.  – 20 руб.</p>
            </div>
            <div className="services_page-call_modal-text">
               <p>
                  Для всех проектов 4 990 р. – запуск проекта Reffection (настройка, обучение, контроль)
               </p>
            </div>
            <button type='button' aria-label='Закрыть окно с таблицей' className="services_page-call_modal-close" onClick={handleClose}>
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

export default ServicePageCallCenterModal;