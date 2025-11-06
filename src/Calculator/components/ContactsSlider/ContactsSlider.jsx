import React, { useEffect, useState } from 'react';
import { CONFIG } from '../../constants';
import { Range } from "react-range";
import './ContactsSlider.scss';

const ContactsSlider = ({ contacts, onContactsChange, isDragging, onThumbMouseDown, onTrackClick, sliderRef }) => {
   const [values, setValues] = React.useState([contacts]);
   const [percentValue, setPercentValue] = useState(0)
   const MIN = CONFIG.SLIDER.MIN;
   const MAX = CONFIG.SLIDER.MAX;
   const STEP = CONFIG.SLIDER.STEP
   const percent = (((values[0] - MIN) / (MAX - MIN)) * 100).toFixed(3);

   useEffect(() => {
      setPercentValue(percent);
   }, [percent]);
   return (
      <div className='range_block'>
         <div className="range_block-title">Выберите количество контактов</div>
         <Range
            label="Select your value"
            step={STEP}
            min={MIN}
            max={MAX}
            values={values}
            className={"slider"}
            onChange={(values) => {
               setValues(values);
               const newPercent = (((values[0] - MIN) / (MAX - MIN)) * 100).toFixed(3);
               setPercentValue(newPercent);
               onContactsChange({ target: { value: values } });
            }}
            onFinalChange={(values) => {
               setValues(values);
               const newPercent = (((values[0] - MIN) / (MAX - MIN)) * 100).toFixed(3);
               setPercentValue(newPercent);
            }}
            renderTrack={({ props, children }) => (
               <div
                  {...props}
                  className='slider'
               >
                  <div
                     className="slider-before"
                     style={{
                        width: (0 + percentValue) + '%'
                     }}
                  />
                  <div
                     className="slider-after"
                     style={{
                        width: (100 - percentValue) + '%'
                     }}
                  />
                  {children}
               </div>
            )}
            renderThumb={({ props }) => (
               <div
                  {...props}
                  key={props.key}
                  className='slider-handle'
               >
                  <span className="slider-handle-cloud">{values}</span>
                  <div className="slider-handle-icon">
                     <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={17} cy={17} r={17} fill="white" />
                        <path d="M20 13L24 17L20 21" stroke="#006AFE" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 21L10 17L14 13" stroke="#006AFE" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </div>
               </div>
            )}
         />
         <div className="range_block_list">
            <div className="range_block_list-item">1000</div>
            <div className="range_block_list-item">50 000</div>
            <div className="range_block_list-item">100 000</div>
         </div>
      </div>
   )
};

export default ContactsSlider;