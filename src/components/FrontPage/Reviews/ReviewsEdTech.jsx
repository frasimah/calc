import './Reviews.scss'
import ReviewsSwiperEdTech from './ReviewsSwiper/ReviewsSwiperEdTech';

function ReviewsEdTech({ className }) {

   return (
      <section className={`reviews ${className ? className : ''}`}>
         <div className="container">
            <div className="reviews_wrap">
               <ReviewsSwiperEdTech />
            </div>
         </div>
      </section>
   );
}

export default ReviewsEdTech;