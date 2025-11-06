import { Link } from 'react-router-dom';
import '../Modals.scss'
import './ModalMenu.scss'
import Modal from 'react-modal';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CityBlock from '../../CityBlock/CityBlock';

Modal.setAppElement('#root');

function ModalMenu({ isOpen, onRequestClose }) {
   const subMenuRef = useRef(null)
   const btnRef = useRef(null); // Ссылка на кнопку
   const location = useLocation();

   const handleClick = (e) => {
      const thisMenu = subMenuRef.current;
      const thisBtn = e.target;
      thisBtn.classList.toggle('active');
      thisMenu.classList.toggle('active');
      const marginTop = '20px'
      const marginBot = '10px'

      // Сохраняем ссылку на кнопку для дальнейшего использования
      btnRef.current = thisBtn;

      if (thisMenu.classList.contains('active')) {
         thisMenu.style.maxHeight = `${thisMenu.scrollHeight}px`;
         thisMenu.style.marginTop = marginTop
         thisMenu.style.marginBottom = marginBot
      } else {
         thisMenu.style.maxHeight = '0px';
         thisMenu.style.marginTop = 0
         thisMenu.style.marginBottom = 0
      }
   };

   // Отслеживаем изменение ссылки
   useEffect(() => {
      onRequestClose();
   }, [location.pathname]); // Срабатывает при изменении location.pathname

   return (
      <Modal
         closeTimeoutMS={800}
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         contentLabel="Product Details"
         className={'modal_menu'}
         overlayClassName={'modal_menu_wrap'}
      >
         <CityBlock />
         <button type='button' aria-label='Зыкрыть меню' className="close_menu" onClick={onRequestClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
               <rect x="0.5" width="26" height="26" rx="13" fill="#F5F5F7" />
               <path d="M10.5 16L16.5 10M16.5 16L10.5 10" stroke="#121212" />
            </svg>
         </button>
         <nav>
            <ul>
               <li className='drops'>
                  <button type='button'
                     onClick={handleClick}
                  >
                     Продукты
                     <div className="icon">
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 1.5L8 8.5L15 1.5" stroke="white" strokeWidth="2" />
                        </svg>
                     </div>
                  </button>
                  <ul className='sub-menu' ref={subMenuRef}>
                     <li>
                        <Link
                           to='/product/segment-scoring'
                        >
                           Segment Scoring
                        </Link>
                     </li>
                     <li>
                        <Link
                           to='/product/retargeting-trigger-leads'
                        >
                           Retargeting Trigger Leads
                        </Link>
                     </li>
                     <li>
                        <Link
                           to='/product/call-center'
                        >
                           Call Center
                        </Link>
                     </li>
                  </ul>
               </li>
               <li>
                  <Link to='/price' onClick={onRequestClose}>Стоимость</Link>
               </li>
               <li>
                  <a href='https://reffection.ru/blog' onClick={onRequestClose}>Блог</a>
               </li>
               <li>
                  <Link to='/partners' onClick={onRequestClose}>Партнерам</Link>
               </li>
               <li>
                  <Link to='/contacts' onClick={onRequestClose}>Контакты</Link>
               </li>
            </ul>
         </nav>
         <div className="modal_menu-circle"></div>
      </Modal>
   );
}
export default ModalMenu;