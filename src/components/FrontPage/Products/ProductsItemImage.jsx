import ReactPlayer from 'react-player'

function ProductsItemImage({ link, alt }) {
   return (
      <div className="products_wrap_item-image">
         <ReactPlayer
            url={link}
            loop={true}
            playing={true}
            playsinline={true}
            muted={true}
            width={'110%'}
            height={'100%'}
         />
      </div>
   );
}

export default ProductsItemImage;