import { useRef } from 'react'
import ConsentInfo from '../components/Consent/ConsentInfo';

function Consent() {
   const wrapSection = useRef(null)

   return (
      <div className="consent_block" ref={wrapSection}>
         <ConsentInfo />
      </div>
   );
}

export default Consent;