import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Benefits.scss'

gsap.registerPlugin(ScrollTrigger);

function Benefits({ children, className }) {
   const blockRef = useRef(null)
   useEffect(() => {
      const thiblockRef = blockRef.current.children
      gsap.set(thiblockRef, {
         scaleX: .85,
         scaleY: .85,
         opacity: 0,
      })

      ScrollTrigger.create({
         trigger: thiblockRef,
         start: "top bottom-=100",
         onEnter: () => {
            gsap.to(thiblockRef, {
               scaleX: 1,
               scaleY: 1,
               opacity: 1,
            })
         }
      });
   }, []);
   return (
      <div className={`benefits row ${className ? className : ''}`} ref={blockRef}>
         {children}
      </div>
   );
}

export default Benefits;