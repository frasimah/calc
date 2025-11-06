import { useMediaQuery } from 'react-responsive'

function ProductsItemContent({ children, className }) {
   const isTablet = useMediaQuery({ query: '(max-width: 1199px)' });
   const handleHoverLeaver = (e) => {
      if (!isTablet) {
         const item = e.currentTarget;
         const thisCircle = item.querySelector('.products_wrap_item-circle')

         if (thisCircle) {
            thisCircle.style.opacity = 0;
         }
      }
   }
   const handleHover = (e) => {
      if (!isTablet) {
         const item = e.currentTarget;
         const rect = item.getBoundingClientRect();
         const mouseX = e.clientX - rect.left;
         const mouseY = e.clientY - rect.top;
         const thisCircle = item.querySelector('.products_wrap_item-circle')
         if (thisCircle) {
            thisCircle.style.opacity = 1;
            thisCircle.style.left = mouseX + 'px';
            thisCircle.style.top = mouseY + 'px';
         }
      }
   };
   return (
      <div className={`products_wrap_item_content ${className ? className : ''}`} onMouseMove={handleHover} onMouseLeave={handleHoverLeaver} style={{ overflow: 'hidden' }}>
         {children}
         <div className="products_wrap_item-circle"></div>
         <div className="products_wrap_item-circle_static"></div>
      </div>
   );
}

export default ProductsItemContent;