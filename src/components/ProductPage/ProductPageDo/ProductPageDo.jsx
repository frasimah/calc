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
                           <CustomText className="product_page_do_top-title white" dangerouslySetInnerHTML={{ __html: item?.text }} />
                        </BenefitsItemContent>
                     </BenefitsItem>
                  </div>
               ))}
            </Benefits>
         </section>
      </div>
   );
}

export default ProductPageDo;