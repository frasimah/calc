function BenefitsItem({ children, className }) {
   return (
      <div className={`benefits_item ${className ? className : ''}`}>
         {children}
      </div>
   );
}

export default BenefitsItem;