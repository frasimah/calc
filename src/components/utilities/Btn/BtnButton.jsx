import './Btn.scss'

function BtnButton({ children, label, className, onClick }) {
   return (
      <button type='button' className={`btn ${className}`} aria-label={label} onClick={onClick}>
         {children}
      </button>
   );
}

export default BtnButton;