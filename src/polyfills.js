// polyfills.js

if (
   typeof navigator !== 'undefined' &&
   navigator.userAgent.includes('ReactSnap')
) {
   if (typeof Intl !== 'undefined' && !Intl.Segmenter) {
      Intl.Segmenter = class {
         constructor() {
            return {
               segment: (text) => [{ segment: text }]
            };
         }
      };
   }
}
