import React, { useEffect, useRef, useState } from 'react'
import CustomText from '../../../utilities/CustomText/CustomText';
import './ReviewsBlockquote.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ReviewsBlockquote() {
   const [startAnimate, setStartAnimate] = useState(false)
   const thisBlockRef = useRef(null)

   useEffect(() => {
      const thisBlock = thisBlockRef.current
      ScrollTrigger.create({
         trigger: thisBlock,
         start: "bottom bottom",
         end: "bottom bottom",
         scrub: false,
         once: true,
         onEnter: () => {
            setStartAnimate(true)
         }
      });
   }, [startAnimate]);
   return (
      <div className="container">
         <div className={`reviews_blockquote ${startAnimate ? 'active' : ''}`} ref={thisBlockRef}>
            <div className="row">
               <div className="col-xl-10">
                  <div className="reviews_blockquote_content">
                     <div className="reviews_blockquote_content_it">
                        <div className="reviews_blockquote_content_it-line">
                           <svg xmlns="http://www.w3.org/2000/svg" width="1338" height="202" viewBox="0 0 1338 202" fill="none">
                              <path d="M1337 201V31C1337 14.4315 1323.57 1 1307 1L0.999944 1" stroke="url(#paint0_linear_332_65644)" strokeWidth="2" strokeLinecap="round" className="svg-elem-1" />
                              <defs>
                                 <linearGradient id="paint0_linear_332_65644" x1="669" y1="1" x2="669" y2="201" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E8E8EB" />
                                    <stop offset="1" stopColor="#E8E8EB" />
                                 </linearGradient>
                              </defs>
                           </svg>
                        </div>
                        <div className="reviews_blockquote_content_it-title section_title">
                           В том, что качественных лидов будет достаточно — нет сомнений, емкость рынка огромная.
                        </div>
                        <CustomText className="reviews_blockquote_content_it-text">
                           <p>
                              В любой отрасли с накопленным трафиком, идентификация скрытых пользователей — очень эффективный инструмент лидогенерации. И даже если на сайте рекламодателя трафика не много —  мы исследуем всю вертикаль онлайн-спроса в его нише и соберем/квалифицируем данные look-a-like аудитории из нашей ежедневно обновляемой Big data. В том, что качественных лидов будет достаточно — нет сомнений, емкость рынка огромная.
                           </p>
                        </CustomText>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2">
                  <div className="reviews_blockquote_author">
                     <div className="reviews_blockquote_author-image">
                        <img src="./img/reviews/lev.jpg" alt="Лев Овчинников" />
                     </div>
                     <CustomText className="reviews_blockquote_author-info">
                        <p>Лев Овчинников,</p>
                        <p>CEO Reffection</p>
                     </CustomText>
                  </div>
               </div>
            </div>
            <div className="reviews_blockquote-line">
               <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="202" viewBox="0 0 1682 202" fill="none">
                  <path d="M1 0.999993V171C1 187.569 14.4315 201 31 201H1681" stroke="#E8E8EB" strokeWidth="2" strokeLinecap="round" className="svg-elem-1"></path>
               </svg>
            </div>
         </div>
      </div>
   );
}

export default ReviewsBlockquote;