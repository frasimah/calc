import { useState } from 'react';
import './CityBlock.scss'
import { getMetaConfig, getConfigArray } from "../../../config/metaConfig";
import { useRef } from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

function CityBlock() {
   const currentDomain = window.location.hostname.split('.');
   const { city } = getMetaConfig(currentDomain[0]);
   const arrayCity = getConfigArray()
   const refCity = useRef()

   const [openCity, setOpenCity] = useState(false)
   const [renderCity, setRenderCity] = useState(city)

   // Открытие списка городов
   const handleClick = () => {
      setOpenCity(!openCity)
   }

   // Смена города в рендере
   const changeCity = (e) => {
      setRenderCity(e.target.innerText)
      setOpenCity(false)
   }

   // Закрытие списка по клику вне
   const handleClickOutside = (event) => {
      // Проверяем, был ли клик вне блока
      if (refCity.current && !refCity.current.contains(event.target)) {
         setOpenCity(false); // Убираем класс
      }
   };

   useEffect(() => {
      // Добавляем слушатель на клик по документу
      document.addEventListener('mousedown', handleClickOutside);

      // Убираем слушатель при размонтировании компонента
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);
   return (
      <div className={`city_block ${openCity ? 'active' : ''}`} ref={refCity}>
         <button
            type='button'
            role='button'
            aria-label='Раскрыть список городов'
            className="city_block-render"
            onClick={handleClick}>
            <div className="icon --point">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.56992 15.8594L6.56817 15.8582L6.56383 15.8549L6.5485 15.8434C6.53534 15.8335 6.51637 15.8192 6.49194 15.8006C6.44322 15.7635 6.37273 15.7092 6.28369 15.6392C6.10568 15.4993 5.85305 15.2961 5.55057 15.04C4.94663 14.5288 4.1393 13.8028 3.3297 12.9461C2.52212 12.0915 1.69885 11.0927 1.07427 10.0353C0.453334 8.98393 0 7.82625 0 6.66671C0 4.89859 0.737499 3.20289 2.05025 1.95263C3.36301 0.702385 5.14349 0 7 0C8.85654 0 10.637 0.702385 11.9498 1.95263C13.2625 3.20289 14 4.89859 14 6.66671C14 7.82625 13.5467 8.98393 12.9257 10.0353C12.3012 11.0927 11.4779 12.0915 10.6703 12.9461C9.86069 13.8028 9.05338 14.5288 8.44942 15.04C8.14695 15.2961 7.89432 15.4993 7.71631 15.6392C7.62727 15.7092 7.55678 15.7635 7.50806 15.8006C7.48363 15.8192 7.46466 15.8335 7.4515 15.8434L7.43617 15.8549L7.43183 15.8582L7.4305 15.8591C7.4305 15.8591 7.42973 15.8597 7 15.3334L7.4305 15.8591C7.17773 16.0463 6.82269 16.0467 6.56992 15.8594ZM7 15.3334L6.56992 15.8594C6.56992 15.8594 6.57027 15.8597 7 15.3334ZM9.1 6.66671C9.1 7.77132 8.15983 8.66673 7 8.66673C5.84017 8.66673 4.9 7.77132 4.9 6.66671C4.9 5.56214 5.84017 4.6667 7 4.6667C8.15983 4.6667 9.1 5.56214 9.1 6.66671Z" fill="#006AFE" />
               </svg>
            </div>
            <span>{renderCity}</span>
            <div className="icon --arrow">
               <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                  <path d="M1 1L6 5L11 1" stroke="#121212" strokeWidth="1.4" />
               </svg>
            </div>
         </button>
         <div className="city_block_wrap">
            <ul className="city_block_list">
               {Object.values(arrayCity).map(item => (
                  <li className="city_block_list_it" key={nanoid(4)}>
                     <a href={`https://${item.domain}reffection.ru/`}
                        type='button'
                        role="button"
                        aria-label={`Город ${item.city}`}
                        className='city_block_list_it-btn'
                        onClick={changeCity}
                     >
                        {item.city}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

export default CityBlock;