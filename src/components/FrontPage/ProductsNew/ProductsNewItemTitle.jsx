function ProductsNewItemTitle({ children, className }) {
   return (
      <h3 className={`products_wrap_item-title ${className ? className : ''}`} dangerouslySetInnerHTML={{ __html: children }} />
   );
}

export default ProductsNewItemTitle;