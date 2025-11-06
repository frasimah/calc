function AdvatagesCardItemTitle({ children, className }) {
   return (
      <h3 className={`advantages_card_item-title ${className ? className : ''}`}>
         {children}
      </h3>
   );
}

export default AdvatagesCardItemTitle;