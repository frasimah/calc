import { useState, useEffect } from "react";

function BtnTop() {
   const [isVisible, setIsVisible] = useState(false);

   // Функция для обработки прокрутки
   const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Показывать кнопку, если прокручено больше 500 пикселей
      setIsVisible(scrollTop > 500);
   };

   // Добавление слушателя прокрутки при монтировании компонента
   useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      // Удаление слушателя при размонтировании компонента
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   // Функция для плавной прокрутки вверх
   const handleTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   return (
      <button
         type="button"
         aria-label="наверх"
         className={`btn_top ${isVisible ? "visible" : "hidden"}`}
         onClick={handleTop}
      >
         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="40" y="40" width="40" height="40" rx="20" transform="rotate(-180 40 40)" fill="#F5F5F7" />
            <path d="M20.3431 14.3432L14.6863 20M20.3431 14.3432L26 20M20.3431 14.3432L20.3431 20L20.3431 25.6569" stroke="#121212" strokeWidth="1.5" />
         </svg>
      </button>
   );
}

export default BtnTop;