function AdvatagesCardItemIcon({ children, className, dangerouslySetInnerHTML }) {
   return (
      <div className={`advantages_card_item-icon ${className ? className : ''}`} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
         {children}
      </div>
   );
}

export default AdvatagesCardItemIcon;