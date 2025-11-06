import './Btn.scss'

function BtnLink({ children, label, link, className }) {
   return (
      <a href={link} type='button' className={`btn ${className ? className : ''}`} aria-label={label} target='_blank' rel='nofollow noreferrer'>
         {children}
      </a>
   );
}

export default BtnLink;