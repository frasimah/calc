function BenefitsItemContent({ children, className }) {
   return (
      <div className={`benefits_item_content ${className ? className : ''}`}>
         {children}
      </div>
   );
}

export default BenefitsItemContent;