import './Reviews.scss'
import ReviewsSwiperCar from './ReviewsSwiper/ReviewsSwiperCar';

function ReviewsCar({ className }) {

   return (
      <section className={`reviews ${className ? className : ''}`}>
         <div className="container">
            <div className="reviews_wrap">
               <ReviewsSwiperCar />
            </div>
         </div>
      </section>
   );
}

export default ReviewsCar;