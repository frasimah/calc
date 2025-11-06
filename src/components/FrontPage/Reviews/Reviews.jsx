import './Reviews.scss'
import ReviewsSwiper from "./ReviewsSwiper/ReviewsSwiper";

function Reviews({ className }) {

   return (
      <section className={`reviews ${className ? className : ''}`} id='cases'>
         <div className="container">
            <div className="reviews_wrap">
               <ReviewsSwiper />
            </div>
         </div>
      </section>
   );
}

export default Reviews;