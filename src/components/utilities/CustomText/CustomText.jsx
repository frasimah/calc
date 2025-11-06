import './CustomText.scss'

function CustomText({ className, children, dangerouslySetInnerHTML }) {
   return (
      <div className={`typical_text ${className ? className : ''}`} dangerouslySetInnerHTML={dangerouslySetInnerHTML}>
         {children}
      </div>
   );
}

export default CustomText;