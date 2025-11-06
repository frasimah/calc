import { useEffect } from 'react';

const InvisibleRecaptcha = ({ onVerify }) => {
   useEffect(() => {
      const checkGreCaptcha = () => {
         if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
               console.log('reCAPTCHA is ready');
               window.grecaptcha.execute('6LfhU34qAAAAAPywrdFvTHcjgfumJCSgcsCXyoIM', { action: 'submit' }).then((token) => {
                  console.log('Token received');
                  onVerify(token);
               });
            });
         } else {
            console.log('grecaptcha is still not available');
            setTimeout(checkGreCaptcha, 100); // Пытаемся снова через 100ms
         }
      };

      checkGreCaptcha(); // Инициализация на старте

   }, [onVerify]);

   return null;
};

export default InvisibleRecaptcha;
