function ProductsNewItemContent({ children, className }) {
   return (
      <div className={`products_wrap_item_content ${className ? className : ''}`}>
         {children}
      </div>
   );
}

export default ProductsNewItemContent;