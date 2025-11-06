import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsentInfoThird from '../components/Consent/ConsentInfoThird';


gsap.registerPlugin(ScrollTrigger);

function ConsentThird() {
   const wrapSection = useRef(null)

   useEffect(() => {
      const allSection = wrapSection.current.querySelectorAll('section')
      allSection.forEach((item, index) => {
         if (index !== 0) {
            gsap.set(item, {
               opacity: 0,
               y: 50,
            })
            ScrollTrigger.create({
               trigger: item,
               start: "top bottom",
               end: "bottom bottom",
               onEnter: () => {
                  gsap.to(item, {
                     opacity: 1,
                     y: 0,
                     duration: .6,
                     onComplete: () => {
                        item.style.transform = ''
                     }
                  })
               }
            });
         }
      })
   }, []);

   return (
      <div className="consent_block" ref={wrapSection}>
         <ConsentInfoThird />
      </div>
   );
}

export default ConsentThird;