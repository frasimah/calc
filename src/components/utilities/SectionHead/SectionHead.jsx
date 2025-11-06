import React from 'react'
import './SectionHead.scss'

function SectionHead({ children, className }) {
   return (
      <div className={`section_head ${className ? className : ''}`}>
         {children}
      </div>
   );
}

export default SectionHead;