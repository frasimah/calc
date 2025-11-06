import { useMediaQuery } from 'react-responsive'

function ProductsNewItem({ children, className, classCol }) {
   const isShowSlider = useMediaQuery({ query: '(max-width: 1399px)' });

   return (
      !isShowSlider ? (
         classCol && (
            <div className={classCol}>
               <div className={`products_wrap_item ${className ? className : ''}`}>
                  {children}
                  {/* <div className="products_wrap_item-circle"></div>
                  <div className="products_wrap_item-circle_static"></div> */}
               </div>
            </div>
         )
      ) : (
         <div className={`products_wrap_item ${className ? className : ''}`}>
            {children}
            <div className="products_wrap_item-circle_static"></div>
         </div>
      )
   );
}

export default ProductsNewItem;