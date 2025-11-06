function ProductsItemTitle({ children, className }) {
   return (
      <h3 className={`products_wrap_item-title ${className ? className : ''}`}>
         {children}
      </h3>
   );
}

export default ProductsItemTitle;