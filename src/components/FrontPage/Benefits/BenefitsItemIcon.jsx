function BenefitsItemIcon({ children, className, dangerouslySetInnerHTML }) {
   return (
      <div className={`benefits_item-icon ${className ? className : ''}`} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
         {children}
      </div>
   );
}

export default BenefitsItemIcon;