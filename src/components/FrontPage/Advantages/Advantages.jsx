import { useEffect, useRef, useState } from 'react';
import AdvatagesCard from '../../AdvatagesCard/AdvatagesCard';
import AdvatagesCardItem from '../../AdvatagesCard/AdvatagesCardItem';
import AdvatagesCardItemIcon from '../../AdvatagesCard/AdvatagesCardItemIcon';
import CustomText from '../../utilities/CustomText/CustomText';
import SectionHead from '../../utilities/SectionHead/SectionHead';
import SectionHeadIcon from '../../utilities/SectionHead/SectionHeadIcon';
import SectionHeadTitlte from '../../utilities/SectionHead/SectionHeadTitlte';
import './Advantages.scss'
import { gsap } from "gsap";

function Advantages() {
   const circleRef = useRef(null);
   const [animateReady, setAnimateReady] = useState(false)
   const animateCircles = () => {
      const currentCircles = circleRef.current
      if (!currentCircles) return

      const circles = Array.from(currentCircles.querySelectorAll('.circle'))
      if (!circles) return

      setAnimateReady(true)


      circles.forEach((circle) => {
         const parent = circle.offsetParent;

         const parentWidth = parent.clientWidth;
         const parentHeight = parent.clientHeight;

         const circleWidth = circle.offsetWidth;
         const circleHeight = circle.offsetHeight;

         const minX = -100;
         const maxX = parentWidth - circleWidth + 100;

         const minY = -100;
         const maxY = parentHeight - circleHeight + 100;

         const randomX = () => gsap.utils.random(minX, maxX, 1);
         const randomY = () => gsap.utils.random(minY, maxY, 1);

         const animate = () => {
            const newX = randomX();
            const newY = randomY();

            gsap.to(circle, {
               x: newX,
               y: newY,
               duration: 4.5,
               ease: "none",
               onComplete: animate
            });
         };

         animate();
      });
   };


   useEffect(() => {
      animateCircles()
   }, [animateReady, circleRef]);
   return (
      <section className="advantages">
         <div className="container">
            <div className="advantages_wrap" ref={circleRef}>
               <SectionHead>
                  <SectionHeadIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M1.00098 22.7988C1.55326 22.7988 2.00098 23.2465 2.00098 23.7988C2.00098 27.4091 2.00336 30.0167 2.27051 32.0039C2.53382 33.9621 3.03768 35.1685 3.93359 36.0645L4.10547 36.2285C4.98346 37.0231 6.15835 37.4817 7.99414 37.7285C9.48456 37.9289 11.3243 37.98 13.6738 37.9932L16.2002 37.998L16.3027 38.0029C16.8068 38.0543 17.2002 38.4804 17.2002 38.998C17.1998 39.5154 16.8066 39.9409 16.3027 39.9922L16.2002 39.998L13.6797 39.9932C11.3016 39.9802 9.34215 39.9278 7.72852 39.7109C5.68447 39.4361 4.06364 38.8833 2.77344 37.7197L2.51953 37.4785C1.1901 36.149 0.58122 34.4505 0.288086 32.2705C-0.00115039 30.119 0.000976887 27.3526 0.000977022 23.7988C0.000977022 23.2465 0.448692 22.7988 1.00098 22.7988ZM38.999 22.7988C39.5513 22.7988 39.999 23.2465 39.999 23.7988C39.999 27.3526 40.0012 30.119 39.7119 32.2705C39.437 34.3146 38.8845 35.9355 37.7207 37.2256L37.4805 37.4785C36.1508 38.8081 34.4518 39.4178 32.2715 39.7109C30.1199 40.0001 27.3537 39.998 23.7998 39.998C23.2478 39.998 22.8002 39.55 22.7998 38.998C22.7998 38.4458 23.2475 37.998 23.7998 37.998C27.4105 37.998 30.0185 37.9957 32.0059 37.7285C33.9641 37.4652 35.1704 36.9604 36.0664 36.0645L36.2295 35.8926C37.0241 35.0147 37.4826 33.8397 37.7295 32.0039C37.9966 30.0167 37.999 27.4091 37.999 23.7988C37.999 23.2465 38.4467 22.7988 38.999 22.7988ZM16.2002 4.33128e-07C16.7525 4.33128e-07 17.2002 0.447716 17.2002 1C17.2001 1.55222 16.7524 2 16.2002 2C12.5894 2 9.9815 2.00235 7.99414 2.26953C6.15813 2.51643 4.98349 2.97476 4.10547 3.76953L3.93359 3.93262C3.03754 4.82871 2.53384 6.03489 2.27051 7.99316C2.00333 9.98045 2.00098 12.5886 2.00098 16.1992C2.00071 16.7513 1.5531 17.1992 1.00098 17.1992C0.448858 17.1992 0.00124622 16.7513 0.000977022 16.1992C0.000977022 12.6452 -0.00116949 9.8781 0.288086 7.72656C0.581243 5.54649 1.18998 3.84814 2.51953 2.51856L2.77344 2.27734C4.06361 1.11391 5.68454 0.56191 7.72852 0.28711C9.88006 -0.00210402 12.6462 4.30089e-07 16.2002 4.33128e-07ZM23.7998 4.33128e-07C27.3538 4.33128e-07 30.1199 -0.00210322 32.2715 0.28711C34.4518 0.580244 36.1508 1.18886 37.4805 2.51856L37.7207 2.77246C38.8843 4.06258 39.4371 5.68264 39.7119 7.72656C40.0012 9.8781 39.999 12.6452 39.999 16.1992C39.9988 16.7513 39.5511 17.1992 38.999 17.1992C38.4469 17.1992 37.9993 16.7513 37.999 16.1992C37.999 12.5886 37.9967 9.98045 37.7295 7.99316C37.4826 6.15721 37.0243 4.9825 36.2295 4.10449L36.0664 3.93262C35.1704 3.03657 33.9642 2.53287 32.0059 2.26953C30.0185 2.00234 27.4105 2 23.7998 2C23.2476 2 22.7999 1.55222 22.7998 1C22.7998 0.447716 23.2475 4.33128e-07 23.7998 4.33128e-07Z" fill="#C9C9C9" />
                        <path d="M19.0641 11.5376C19.5473 10.3753 21.1918 10.3753 21.6762 11.5376L23.6488 16.2797L28.7689 16.6905C30.0228 16.7912 30.5321 18.3564 29.5758 19.1747L25.6746 22.5168L26.8664 27.5135C27.1584 28.7369 25.8274 29.7046 24.7534 29.0493L20.3701 26.3715L15.9868 29.0493C14.9117 29.7057 13.5807 28.7369 13.8727 27.5135L15.0644 22.5168L11.1633 19.1747C10.2081 18.3564 10.7162 16.7912 11.9714 16.6905L17.0914 16.2797L19.0641 11.5376ZM20.3701 12.8176L18.5921 17.0923C18.4921 17.3323 18.3278 17.5401 18.1173 17.6928C17.9069 17.8455 17.6584 17.9373 17.3993 17.9581L12.7851 18.3282L16.3003 21.3398C16.7032 21.6849 16.8786 22.2271 16.7564 22.7431L15.6812 27.2453L19.6322 24.8324C19.8542 24.6968 20.1094 24.625 20.3695 24.625C20.6297 24.625 20.8848 24.6968 21.1069 24.8324L25.0567 27.2453L23.9838 22.7431C23.9233 22.4899 23.9339 22.2249 24.0144 21.9773C24.0949 21.7297 24.2421 21.5091 24.4399 21.3398L27.9551 18.3293L23.341 17.9581C23.0816 17.9375 22.8329 17.8458 22.6222 17.6931C22.4116 17.5403 22.2471 17.3324 22.147 17.0923L20.3701 12.8176Z" fill="#C9C9C9" />
                     </svg>
                  </SectionHeadIcon>
                  <SectionHeadTitlte>
                     Наши преимущества
                  </SectionHeadTitlte>
                  <CustomText className="center">
                     <p>
                        Приводим рекламодателю лиды, доступ к которым практически невозможен через другие инструменты digital-маркетинга
                     </p>
                  </CustomText>
               </SectionHead>
               <AdvatagesCard animateReady={setAnimateReady}>
                  <AdvatagesCardItem classCol='col-xl-3'>
                     <AdvatagesCardItemIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                           <rect x="1" y="1" width="60" height="60" rx="12" stroke="#FFF" />
                           <path d="M22 43V33.4M22 33.4V21.4M22 33.4L25.1766 32.8071C27.2987 32.411 29.4984 32.5994 31.5077 33.3496C33.6852 34.1625 36.0817 34.3143 38.3569 33.7834L38.6325 33.7191C39.4362 33.5315 40 32.8576 40 32.0844V23.244C40 22.3074 39.0569 21.6201 38.0833 21.8472C35.986 22.3366 33.7768 22.1967 31.7696 21.4473L31.5077 21.3496C29.4984 20.5994 27.2987 20.4109 25.1766 20.807L22 21.4M22 21.4V19" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                     </AdvatagesCardItemIcon>
                     <CustomText className="white">
                        <p>
                           Прямой и моментальный результат: от фактического старта проекта до первых квалифицированных лидов максимум сутки                        </p>
                     </CustomText>
                     <div className="circle"></div>
                  </AdvatagesCardItem>
                  <AdvatagesCardItem classCol='col-xl-3'>
                     <AdvatagesCardItemIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                           <rect x="1" y="1" width="60" height="60" rx="12" stroke="#FFF" />
                           <path d="M25.6667 19H20.3333C19.597 19 19 19.597 19 20.3333V25.6667" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M25.6667 43H20.3333C19.597 43 19 42.4031 19 41.6667V36.3334" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M36.3333 43H41.6666C42.403 43 43 42.4031 43 41.6667V36.3334" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M36.3333 19H41.6666C42.403 19 43 19.597 43 20.3333V25.6667" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M31 25.6666V36.3333" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M36.3333 25.6666V36.3333" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M25.6667 25.6666V36.3333" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </AdvatagesCardItemIcon>
                     <CustomText className="white">
                        <p>
                           Возможность оплаты по модели CPQL (оплата за квалифицированный лид)
                        </p>
                     </CustomText>
                     <div className="circle"></div>
                  </AdvatagesCardItem>
                  <AdvatagesCardItem classCol='col-xl-3'>
                     <AdvatagesCardItemIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                           <rect x="1" y="1" width="60" height="60" rx="12" stroke="#FFF" />
                           <path d="M16 22L25.65 32.422C25.8049 32.5907 25.9893 32.7246 26.1924 32.816C26.3955 32.9074 26.6133 32.9544 26.8333 32.9544C27.0534 32.9544 27.2712 32.9074 27.4743 32.816C27.6774 32.7246 27.8617 32.5907 28.0167 32.422L32.3167 27.778C32.4716 27.6093 32.6559 27.4754 32.859 27.384C33.0621 27.2926 33.28 27.2456 33.5 27.2456C33.72 27.2456 33.9379 27.2926 34.141 27.384C34.3441 27.4754 34.5284 27.6093 34.6833 27.778L46 40M46 40H36M46 40V29.8611" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </AdvatagesCardItemIcon>
                     <CustomText className="white">
                        <p>
                           Снижение стоимости привлечения целевого лида в 2 раза за счет актуализации скрытых намерений потерянных потребителей из уникальных источников данных
                        </p>
                     </CustomText>
                     <div className="circle"></div>
                  </AdvatagesCardItem>
                  <AdvatagesCardItem classCol='col-xl-3'>
                     <AdvatagesCardItemIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                           <rect x="1" y="1" width="60" height="60" rx="12" stroke="#FFF" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M20.0982 21.2634C19.5314 20.8395 18.7147 20.9377 18.2739 21.4826C17.8331 22.0276 17.9352 22.8129 18.5019 23.2367L21.463 25.4512C20.3197 26.6817 19.3398 28.1006 18.5441 29.62L18.5159 29.6737C18.3972 29.8987 18.2439 30.1893 18.1754 30.5476C18.1208 30.8326 18.1208 31.1674 18.1754 31.4523C18.2439 31.8106 18.3972 32.1013 18.5159 32.3264L18.5441 32.38C21.0657 37.195 25.4358 41 31.0001 41C33.9006 41 36.4767 39.966 38.6356 38.294L41.9018 40.7366C42.4686 41.1605 43.2853 41.0623 43.7261 40.5173C44.1669 39.9725 44.0647 39.1871 43.4981 38.7632L20.0982 21.2634ZM36.5133 36.7067L34.1763 34.959C33.2978 35.6117 32.1961 36 31.0001 36C28.1281 36 25.8 33.7614 25.8 31C25.8 30.2942 25.9521 29.6225 26.2265 29.0137L23.518 26.9881C22.5065 28.0497 21.6131 29.3184 20.8663 30.7444C20.829 30.8156 20.8013 30.8685 20.778 30.9145C20.7575 30.955 20.7447 30.9816 20.7364 31C20.7447 31.0184 20.7575 31.045 20.778 31.0855C20.8013 31.1315 20.829 31.1843 20.8663 31.2556C23.1476 35.6117 26.7974 38.5 31.0001 38.5C32.9907 38.5 34.8574 37.8519 36.5133 36.7067ZM28.4243 30.6573C28.4083 30.7693 28.4001 30.8838 28.4001 31C28.4001 32.3808 29.5641 33.5 31.0001 33.5C31.3466 33.5 31.6775 33.4348 31.9799 33.3164L28.4243 30.6573Z" fill="#FFF" />
                           <path d="M29.636 26.1739L36.1995 31.0826C36.2 31.0551 36.2003 31.0275 36.2003 31C36.2003 28.2386 33.8721 26 31.0003 26C30.5282 26 30.0707 26.0605 29.636 26.1739Z" fill="#FFF" />
                           <path d="M41.1333 31.2556C40.6836 32.1141 40.1808 32.9157 39.631 33.6493L41.6821 35.1833C42.3468 34.307 42.9398 33.3646 43.4555 32.38L43.4837 32.3263C43.6024 32.1012 43.7556 31.8106 43.8241 31.4522C43.8787 31.1673 43.8787 30.8326 43.8241 30.5476C43.7556 30.1892 43.6024 29.8986 43.4837 29.6736L43.4555 29.62C40.9339 24.805 36.5638 21 30.9996 21C28.7697 21 26.7317 21.611 24.9276 22.6532L27.1756 24.3344C28.3764 23.7935 29.6599 23.5 30.9996 23.5C35.2022 23.5 38.8519 26.3882 41.1333 30.7443C41.1706 30.8156 41.1983 30.8685 41.2215 30.9145C41.2421 30.955 41.2548 30.9816 41.2632 31C41.2548 31.0183 41.2421 31.045 41.2215 31.0855C41.1983 31.1315 41.1706 31.1842 41.1333 31.2556Z" fill="#FFF" />
                        </svg>
                     </AdvatagesCardItemIcon>
                     <CustomText className="white">
                        <p>
                           Выявление скрытых инсайтов заинтересованных пользователей
                        </p>
                     </CustomText>
                     <div className="circle"></div>
                  </AdvatagesCardItem>
               </AdvatagesCard>
            </div>
         </div>
      </section>
   );
}

export default Advantages;