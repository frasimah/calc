import { nanoid } from 'nanoid';
import CustomText from '../../utilities/CustomText/CustomText';
import SectionHeadTitlte from '../../utilities/SectionHead/SectionHeadTitlte';
import './ProductPageAllow.scss'

function ProductPageAllow({ content }) {
   return (
      <section className='product_page_allow'>
         <SectionHeadTitlte>
            Наш продукт позволит
         </SectionHeadTitlte>
         <div className="product_page_allow_wrap row">
            <div className="col-xl-6">
               <div className="product_page_allow_wrap_list row">
                  {content?.list?.map(item => (
                     <div className="my_col" key={nanoid(4)}>
                        <div className="product_page_allow_wrap_list_item" >
                           <div className="product_page_allow_wrap_list_item-icon" dangerouslySetInnerHTML={{ __html: item?.icon }} />
                           <CustomText className={'product_page_allow_wrap_list_item-text'}>
                              <p dangerouslySetInnerHTML={{ __html: item?.text }} />
                           </CustomText>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="col-xl-6">
               <div className={`product_page_allow_wrap_right ${content?.autoHeight ? 'auto_height' : ''}`}>
                  <span>
                     <svg width={830} height={847} viewBox="0 0 830 847" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M310.141 0.00952105C310.141 58.0219 357.264 105.05 415.393 105.05C473.522 105.05 520.645 58.0219 520.645 0.00952105" stroke="#FFF" strokeOpacity="0.2" strokeWidth="0.878081" />
                        <path d="M204.896 -8.607e-07C204.896 116.025 299.142 210.082 415.399 210.082C531.657 210.082 625.902 116.025 625.902 -8.607e-07" stroke="#FFF" strokeOpacity="0.2" strokeWidth="0.878081" />
                        <path d="M99.639 0.00609515C99.639 174.043 241.007 315.128 415.394 315.128C589.78 315.128 731.148 174.043 731.148 0.00609515" stroke="#FFF" strokeOpacity="0.2" strokeWidth="0.878081" />
                        <path d="M-5.62577 0.0141584C-5.62577 232.064 182.865 420.177 415.38 420.177C647.896 420.177 836.387 232.064 836.387 0.0141584" stroke="#FFF" strokeOpacity="0.2" strokeWidth="0.878081" />
                        <path d="M-110.848 0.00275802C-110.848 290.065 124.766 525.207 415.41 525.207C706.054 525.207 941.668 290.065 941.668 0.00275802" stroke="#FFF" strokeOpacity="0.2" strokeWidth="0.878081" />
                        <path d="M-216.113 0.00681921C-216.113 348.081 66.6237 630.251 415.397 630.251C764.17 630.251 1046.91 348.081 1046.91 0.00681921" stroke="#FFF" strokeOpacity="0.2" strokeWidth="0.878081" />
                        <path d="M-319.884 0.00670384C-319.884 405.277 9.31185 733.814 415.396 733.814C821.48 733.814 1150.68 405.277 1150.68 0.00670384" stroke="#FFF" strokeOpacity="0.2" strokeWidth="1.02237" />
                        <path d="M-432.289 0.00784113C-432.289 467.236 -52.7658 846 415.4 846C883.566 846 1263.09 467.236 1263.09 0.00784113" stroke="#FFF" strokeOpacity="0.2" strokeWidth="1.17867" />
                     </svg>
                  </span>
                  <div className="product_page_allow_wrap_right-img">
                     {content.iconRight}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProductPageAllow;