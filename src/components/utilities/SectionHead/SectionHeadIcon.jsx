function SectionHeadIcon({ children, className, dangerouslySetInnerHTML }) {
   return (
      <div className={`section_head-icon ${className ? className : ''}`} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
         {children}
      </div>
   );
}

export default SectionHeadIcon;