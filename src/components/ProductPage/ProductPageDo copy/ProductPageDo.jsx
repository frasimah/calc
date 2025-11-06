import { nanoid } from "nanoid";
import Benefits from "../../FrontPage/Benefits/Benefits";
import BenefitsItem from "../../FrontPage/Benefits/BenefitsItem";
import BenefitsItemContent from "../../FrontPage/Benefits/BenefitsItemContent";
import BenefitsItemIcon from "../../FrontPage/Benefits/BenefitsItemIcon";
import CustomText from "../../utilities/CustomText/CustomText";
import './ProductPageDo.scss';

function ProductPageDo({ content }) {
   return (
      <div className="product_page_do">
         <section className="product_page_do_top">
            <Benefits>
               {content?.top?.map(item => (
                  <div className="col-md-6" key={nanoid(4)}>
                     <BenefitsItem>
                        <BenefitsItemIcon dangerouslySetInnerHTML={{ __html: item?.icon }} />
                        <BenefitsItemContent>
                           <CustomText className="product_page_do_top-title" dangerouslySetInnerHTML={{ __html: item?.text }} />
                        </BenefitsItemContent>
                     </BenefitsItem>
                  </div>
               ))}
            </Benefits>
         </section>
         <section className="product_page_do_bot row">
            <div className="col-xxl-6 col-xl-5 col-md-5 order-md-1 order-2">
               <div className="product_page_do_bot-image">
                  <img src={content?.bot?.image} alt="" />
               </div>
            </div>
            <div className="offset-xxl-1 col-xxl-5 col-xl-6 offset-md-1 col-md-6 order-md-2 order-1">
               <div className="product_page_do_bot_content">
                  <div className="product_page_do_bot_content-icon">
                     <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62.0001 38C62.0001 49.3136 62.0001 54.9708 58.4853 58.4853C54.9708 62.0001 49.3136 62.0001 38 62.0001" stroke="#C9C9C9" strokeWidth="3" strokeLinecap="round" />
                        <path d="M26.0001 62.0001C14.6863 62.0001 9.02948 62.0001 5.51472 58.4853C2 54.9708 2 49.3136 2 38" stroke="#C9C9C9" strokeWidth="3" strokeLinecap="round" />
                        <path d="M26.0001 2C14.6863 2 9.02948 2 5.51472 5.51472C2 9.02948 2 14.6863 2 26.0001" stroke="#C9C9C9" strokeWidth="3" strokeLinecap="round" />
                        <path d="M38 2C49.3136 2 54.9708 2 58.4853 5.51472C62.0001 9.02948 62.0001 14.6863 62.0001 26.0001" stroke="#C9C9C9" strokeWidth="3" strokeLinecap="round" />
                        <path d="M30.564 38.08L30.132 20.548H33.624L33.192 38.08H30.564ZM31.896 46.288C31.488 46.288 31.116 46.192 30.78 46C30.468 45.832 30.216 45.58 30.024 45.244C29.856 44.908 29.772 44.536 29.772 44.128C29.772 43.696 29.856 43.324 30.024 43.012C30.216 42.676 30.468 42.424 30.78 42.256C31.116 42.064 31.488 41.968 31.896 41.968C32.496 41.968 33 42.172 33.408 42.58C33.84 42.988 34.056 43.504 34.056 44.128C34.056 44.536 33.96 44.908 33.768 45.244C33.576 45.58 33.312 45.832 32.976 46C32.664 46.192 32.304 46.288 31.896 46.288Z" fill="#C9C9C9" />
                     </svg>
                  </div>
                  <CustomText className="product_page_do_bot_content-text" dangerouslySetInnerHTML={{ __html: content?.bot?.text }} />
               </div>
            </div>
         </section>
      </div>
   );
}

export default ProductPageDo;