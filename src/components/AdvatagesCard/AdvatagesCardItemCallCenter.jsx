function AdvatagesCardItemCallCenter({ children, className }) {
   return (
      <div className={`advantages_card_item ${className ? className : ''}`}>
         {children}
      </div>
   );
}

export default AdvatagesCardItemCallCenter;