import { useEffect } from 'react';

const RecaptchaScript = () => {
   useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=6LfhU34qAAAAAPywrdFvTHcjgfumJCSgcsCXyoIM';
      script.async = true;

      // Создаем промис для загрузки скрипта
      const loadRecaptchaScript = new Promise((resolve, reject) => {
         script.onload = () => {
            console.log('reCAPTCHA script loaded successfully');
            resolve();
         };

         script.onerror = (err) => {
            console.error('Failed to load reCAPTCHA script', err);
            reject('Failed to load script');
         };

         document.body.appendChild(script);
      });

      loadRecaptchaScript
         .then(() => {
            // Скрипт загрузился, теперь используем grecaptcha
            if (window.grecaptcha) {
               window.grecaptcha.ready(() => {
                  console.log('reCAPTCHA is ready');
               });
            } else {
               console.log('grecaptcha is still not available');
            }
         })
         .catch((error) => {
            console.error('Error loading reCAPTCHA:', error);
         });

      // Функция очистки для удаления скрипта из DOM
      return () => {
         document.body.removeChild(script);
      };
   }, []);

   return null;
};

export default RecaptchaScript;
