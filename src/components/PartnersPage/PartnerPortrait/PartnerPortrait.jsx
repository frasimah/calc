import './PartnerPortrait.scss'
import PartnerPortraitHead from './PartnerPortraitHead';
import PartnerPortraitBody from './PartnerPortraitBody';

function PartnerPortrait() {

   return (
      <section className="partner_portrait">
         <div className="container">
            <div className="partner_portrait_wrap">
               <PartnerPortraitHead />
               <PartnerPortraitBody />
            </div>
         </div>
      </section>
   );
}

export default PartnerPortrait;