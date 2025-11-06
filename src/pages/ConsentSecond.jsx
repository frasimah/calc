import { useRef } from 'react'
import ConsentInfoSecond from '../components/Consent/ConsentInfoSecond';

function ConsentSecond() {
   const wrapSection = useRef(null)


   return (
      <div className="consent_block" ref={wrapSection}>
         <ConsentInfoSecond />
      </div>
   );
}

export default ConsentSecond;