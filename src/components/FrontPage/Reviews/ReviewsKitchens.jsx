import './Reviews.scss'
import ReviewsSwiperKitchens from './ReviewsSwiper/ReviewsSwiperKitchens';

function ReviewsKitchens({ className }) {

   return (
      <section className={`reviews ${className ? className : ''}`}>
         <div className="container">
            <div className="reviews_wrap">
               <ReviewsSwiperKitchens />
            </div>
         </div>
      </section>
   );
}

export default ReviewsKitchens;