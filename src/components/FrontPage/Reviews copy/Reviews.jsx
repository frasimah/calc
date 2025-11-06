import './Reviews.scss'
import ReviewsSwiper from "./ReviewsSwiper/ReviewsSwiper";

function Reviews() {
   return (
      <section className="reviews">
         <div className="container">
            <div className="reviews_wrap">
               <ReviewsSwiper />
            </div>
         </div>
      </section>
   );
}

export default Reviews;