import { useMediaQuery } from 'react-responsive'

function AdvatagesCardItem({ children, className, classCol }) {
   const isShowSlider = useMediaQuery({ query: '(max-width: 1399px)' });
   return (
      !isShowSlider ? (
         classCol && (
            <div className={classCol}>
               <div className={`advantages_card_item ${className ? className : ''}`}>
                  {children}
               </div>
            </div>
         )
      ) : (
         <div className={`advantages_card_item ${className ? className : ''}`}>
            {children}
         </div>
      )
   );
}

export default AdvatagesCardItem;