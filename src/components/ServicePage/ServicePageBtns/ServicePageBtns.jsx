import { Link } from 'react-router-dom';
import './ServicePageBtns.scss'
import FormModal from '../../utilities/Modals/FormModal/FormModal';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function ServicePageBtns() {

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
      <div className="services_page_btns">
         <Link to={'/#cases'} className='services_page_btns-btn btn light_gray'>
            <span>Посмотреть кейсы</span>
            <div className="icon">
               <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                  <path d="M0 5H10" stroke="#121212" />
                  <path d="M5 10L5 -1.78814e-07" stroke="#121212" />
               </svg>
            </div>
         </Link>
         <button type='button' className='services_page_btns-btn btn blue' onClick={openModal}>
            Запросить расчет под мой проект
         </button>
         <FormModal isOpen={modalIsOpen} onRequestClose={closeModal} content={modalContent} />
      </div>
   );
}

export default ServicePageBtns;