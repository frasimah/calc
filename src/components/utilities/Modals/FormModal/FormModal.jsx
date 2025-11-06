import '../Modals.scss'
import FormBlock from "../../form_block/form_block";
import Modal from 'react-modal';
import { useState } from 'react';
import Loader from '../../Loader/Loader';

// Обычная форма
function FormModalTyp({ isOpen, onRequestClose, formTitle, setModalType, calculatorData }) {
   return (
      <div className={'remodal'}>
         <div className="remodal_wrap">
            <button onClick={onRequestClose} className={'close-modal'}>
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.05078 14.9497L14.9503 5.05021" stroke="#121212" />
                  <path d="M14.9492 14.9497L5.04972 5.05021" stroke="#121212" />
               </svg>
            </button>
            <div className={'icon'}>
               <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                  <path d="M19.5 36.9999C21.626 38.5757 24.2115 39.4999 27 39.4999C29.7885 39.4999 32.374 38.5757 34.5 36.9999" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M34.5 27C35.8807 27 37 25.3211 37 23.25C37 21.1789 35.8807 19.5 34.5 19.5C33.1193 19.5 32 21.1789 32 23.25C32 25.3211 33.1193 27 34.5 27Z" fill="#006AFE" />
                  <path d="M19.5 27C20.8807 27 22 25.3211 22 23.25C22 21.1789 20.8807 19.5 19.5 19.5C18.1193 19.5 17 21.1789 17 23.25C17 25.3211 18.1193 27 19.5 27Z" fill="#006AFE" />
                  <path d="M52 32C52 41.428 52 46.1422 49.071 49.071C46.1423 52 41.428 52 32 52" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22 52C12.5719 52 7.85789 52 4.92893 49.071C2 46.1422 2 41.428 2 32" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22 2C12.5719 2 7.85789 2 4.92893 4.92893C2 7.85789 2 12.5719 2 22" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M32 2C41.428 2 46.1423 2 49.071 4.92893C52 7.85789 52 12.5719 52 22" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
               </svg>
            </div>
            <div className={'title_block'}>
               {formTitle ? formTitle : 'Оставить заявку'}
            </div>
            <div className={'descr'}>Наш специалист свяжется в&nbsp;ближайшее время</div>
            <FormBlock setModalType={setModalType} calculatorData={calculatorData} />
         </div>
      </div>
   );
}
// Успешная отправка формы
function FormModalSuccess({ isOpen, onRequestClose }) {
   return (
      <div className={'remodal'}>
         <div className="remodal_wrap">
            <button onClick={onRequestClose} className={'close-modal'}>
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.05078 14.9497L14.9503 5.05021" stroke="#121212" />
                  <path d="M14.9492 14.9497L5.04972 5.05021" stroke="#121212" />
               </svg>
            </button>
            <div className={'icon'}>
               <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                  <path d="M19.5 36.9999C21.626 38.5757 24.2115 39.4999 27 39.4999C29.7885 39.4999 32.374 38.5757 34.5 36.9999" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M34.5 27C35.8807 27 37 25.3211 37 23.25C37 21.1789 35.8807 19.5 34.5 19.5C33.1193 19.5 32 21.1789 32 23.25C32 25.3211 33.1193 27 34.5 27Z" fill="#006AFE" />
                  <path d="M19.5 27C20.8807 27 22 25.3211 22 23.25C22 21.1789 20.8807 19.5 19.5 19.5C18.1193 19.5 17 21.1789 17 23.25C17 25.3211 18.1193 27 19.5 27Z" fill="#006AFE" />
                  <path d="M52 32C52 41.428 52 46.1422 49.071 49.071C46.1423 52 41.428 52 32 52" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22 52C12.5719 52 7.85789 52 4.92893 49.071C2 46.1422 2 41.428 2 32" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22 2C12.5719 2 7.85789 2 4.92893 4.92893C2 7.85789 2 12.5719 2 22" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M32 2C41.428 2 46.1423 2 49.071 4.92893C52 7.85789 52 12.5719 52 22" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
               </svg>
            </div>
            <div className={'title_block'} style={{ marginBottom: 0 }}>
               Спасибо! Свяжемся в&nbsp;ближайшее время!
            </div>
         </div>
      </div>
   );
}
// Ошибка отправки формы
function FormModalError({ isOpen, onRequestClose }) {
   return (
      <div className={'remodal error'}>
         <div className="remodal_wrap">
            <button onClick={onRequestClose} className={'close-modal'}>
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.05078 14.9497L14.9503 5.05021" stroke="#121212" />
                  <path d="M14.9492 14.9497L5.04972 5.05021" stroke="#121212" />
               </svg>
            </button>
            <div className={'icon'}>
               <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                  <path d="M19.5 39.4999C21.626 37.9242 24.2115 36.9999 27 36.9999C29.7885 36.9999 32.374 37.9242 34.5 39.4999" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M34.5 27C35.8807 27 37 25.3211 37 23.25C37 21.1789 35.8807 19.5 34.5 19.5C33.1193 19.5 32 21.1789 32 23.25C32 25.3211 33.1193 27 34.5 27Z" fill="#006AFE" />
                  <path d="M19.5 27C20.8807 27 22 25.3211 22 23.25C22 21.1789 20.8807 19.5 19.5 19.5C18.1193 19.5 17 21.1789 17 23.25C17 25.3211 18.1193 27 19.5 27Z" fill="#006AFE" />
                  <path d="M52 31.9999C52 41.428 52 46.1422 49.071 49.071C46.1423 52 41.428 52 32 52" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22 52C12.5719 52 7.85789 52 4.92893 49.071C2 46.1422 2 41.428 2 31.9999" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22 2C12.5719 2 7.85789 2 4.92893 4.92893C2 7.85789 2 12.5719 2 22" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M32 2C41.428 2 46.1423 2 49.071 4.92893C52 7.85789 52 12.5719 52 22" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
               </svg>
            </div>
            <div className={'title_block'} style={{ marginBottom: 0 }}>
               Не удалось отправить форму, что то пошло не так
            </div>
         </div>
      </div>
   );
}

function FormModalLoading({ isOpen, onRequestClose, formTitle, setModalType }) {
   return (
      <div className={'remodal error'}>
         <div className="remodal_wrap">
            <button onClick={onRequestClose} className={'close-modal'}>
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.05078 14.9497L14.9503 5.05021" stroke="#121212" />
                  <path d="M14.9492 14.9497L5.04972 5.05021" stroke="#121212" />
               </svg>
            </button>
            <div className={'icon'}>
               <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                  <path d="M19.5 36.9999C21.626 38.5757 24.2115 39.4999 27 39.4999C29.7885 39.4999 32.374 38.5757 34.5 36.9999" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M34.5 27C35.8807 27 37 25.3211 37 23.25C37 21.1789 35.8807 19.5 34.5 19.5C33.1193 19.5 32 21.1789 32 23.25C32 25.3211 33.1193 27 34.5 27Z" fill="#006AFE" />
                  <path d="M19.5 27C20.8807 27 22 25.3211 22 23.25C22 21.1789 20.8807 19.5 19.5 19.5C18.1193 19.5 17 21.1789 17 23.25C17 25.3211 18.1193 27 19.5 27Z" fill="#006AFE" />
                  <path d="M52 32C52 41.428 52 46.1422 49.071 49.071C46.1423 52 41.428 52 32 52" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22 52C12.5719 52 7.85789 52 4.92893 49.071C2 46.1422 2 41.428 2 32" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M22 2C12.5719 2 7.85789 2 4.92893 4.92893C2 7.85789 2 12.5719 2 22" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
                  <path d="M32 2C41.428 2 46.1423 2 49.071 4.92893C52 7.85789 52 12.5719 52 22" stroke="#006AFE" strokeWidth="3" strokeLinecap="round" />
               </svg>
            </div>
            <div className={'title_block'}>
               {formTitle ? formTitle : 'Оставить заявку'}
            </div>
            <div className={'descr'}>Наш специалист свяжется в&nbsp;ближайшее время</div>
            <div className={'loader'}>
               <Loader />
            </div>
         </div>
      </div>
   );
}

function FormModal({ isOpen, onRequestClose, formTitle, calculatorData }) {
   const [modalType, setModalType] = useState('form');

   // Обработчик закрытия формы
   const handleClose = () => {
      onRequestClose(); // Вызываем оригинальный обработчик закрытия
      if (modalType !== 'form') {
         setTimeout(() => {
            setModalType('form'); // Сбрасываем состояние на 'form' при закрытии модального окна
         }, (450));
      }
   };

   return (
      <Modal
         closeTimeoutMS={400}
         isOpen={isOpen}
         onRequestClose={handleClose}
         contentLabel="Product Details"
         className={'custom_content'}
         overlayClassName={'custom_overlay'}
         shouldReturnFocusAfterClose={false}
      >
         {modalType === 'form' &&
            <FormModalTyp setModalType={setModalType} formTitle={formTitle} onRequestClose={handleClose} calculatorData={calculatorData} />
         }
         {modalType === 'success' &&
            <FormModalSuccess onRequestClose={handleClose} />
         }
         {modalType === 'error' &&
            <FormModalError onRequestClose={handleClose} />
         }
         {modalType === 'loading' &&
            <FormModalLoading onRequestClose={handleClose} formTitle={formTitle} />
         }
      </Modal>

   );
}

export default FormModal;