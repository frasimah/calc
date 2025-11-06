import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './ReviewBenefit.scss';
import { nanoid } from 'nanoid';

gsap.registerPlugin(ScrollTrigger);

function ReviewBenefit({ className, dataBenefit }) {
   const countRefs = useRef([]);
   const parentRef = useRef()

   useEffect(() => {
      countRefs.current.forEach((el) => {
         const endValue = parseInt(el.dataset.to, 10);

         gsap.fromTo(el,
            { innerText: 0 },
            {
               innerText: endValue,
               duration: 2,
               ease: 'power1.out',
               snap: { innerText: 1 },
               onUpdate: function () {
                  el.innerText = Math.round(el.innerText);
               },
               scrollTrigger: {
                  trigger: parentRef.current,
                  start: 'bottom bottom',
                  toggleActions: 'play reverse play reverse',
               }
            });
      });
   }, []);

   return (
      <div className={`reviews_benefit ${className ? className : ''}`} ref={parentRef}>
         {dataBenefit.map((item, index) => (
            item.animate ? (
               <div className="reviews_benefit_item" key={nanoid(4)}>
                  <div className="reviews_benefit_item-count">
                     <span
                        ref={el => countRefs.current[index] = el}
                        data-to={item.count}
                     >
                        0
                     </span> %
                  </div>
                  <div className='reviews_benefit_item-descr'>
                     <p>
                        {item.text}
                     </p>
                  </div>
               </div>
            ) : (
               <div className="reviews_benefit_item" key={nanoid(4)}>
                  <div className="reviews_benefit_item-count">
                     {item.count}
                  </div>
                  <div className='reviews_benefit_item-descr'>
                     <p>
                        {item.text}
                     </p>
                  </div>
               </div>
            )
         ))}
      </div>
   );
}

export default ReviewBenefit;
