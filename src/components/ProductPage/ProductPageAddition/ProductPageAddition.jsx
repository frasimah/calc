import CustomText from '../../utilities/CustomText/CustomText';
import SectionHeadTitlte from '../../utilities/SectionHead/SectionHeadTitlte';
import './ProductPageAddition.scss'
import { useMediaQuery } from 'react-responsive'

function ProductPageAddition() {
   const isTablet = useMediaQuery({ query: '(max-width: 1199px)' });
   return (
      <section className='product_page_addition'>
         <div className="product_page_addition_head row">
            <div className="col-xxl-6 col-xl-5">
               <SectionHeadTitlte className={'product_page_addition_head-title'}>
                  Дополнительно для мелкого бизнеса/стартапа с&nbsp;небольшим трафиком:
               </SectionHeadTitlte>
            </div>
            {!isTablet &&
               <div className="offset-xxl-1 col-xxl-5 col-xl-6">
                  <CustomText className={'product_page_addition_head-text'}>
                     <p>
                        Возможность лучше понять своего целевого потребителя, его боли, оценить, насколько продукт/услуга соответствует требованиям/ценностям/ожиданиям потребителей и&nbsp;доработать продуктовое предложение.
                     </p>
                  </CustomText>
               </div>
            }
         </div>
         <div className="row">
            {isTablet &&
               <div className="col-md-6">
                  <CustomText className={'product_page_addition_head-text'}>
                     <p>
                        Возможность лучше понять своего целевого потребителя, его боли, оценить, насколько продукт/услуга соответствует требованиям/ценностям/ожиданиям потребителей и&nbsp;доработать продуктовое предложение.
                     </p>
                  </CustomText>
               </div>
            }
            <div className="col-xl-12 col-md-6">
               <div className="product_page_addition_body">
                  <div className="product_page_addition_body_content">
                     <div className="product_page_addition_body_content-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                           <path d="M61.9727 38.002C61.9727 49.3156 61.9727 54.9727 58.4579 58.4872C54.9434 62.002 49.2863 62.002 37.9727 62.002" stroke="#C9C9C9" strokeWidth="3" strokeLinecap="round" />
                           <path d="M25.9727 62.002C14.659 62.002 9.00213 62.002 5.48738 58.4872C1.97266 54.9727 1.97266 49.3156 1.97266 38.002" stroke="#C9C9C9" strokeWidth="3" strokeLinecap="round" />
                           <path d="M25.9727 2.00195C14.659 2.00195 9.00213 2.00195 5.48738 5.51668C1.97266 9.03143 1.97266 14.6883 1.97266 26.002" stroke="#C9C9C9" strokeWidth="3" strokeLinecap="round" />
                           <path d="M37.9727 2.00195C49.2863 2.00195 54.9434 2.00195 58.4579 5.51668C61.9727 9.03143 61.9727 14.6883 61.9727 26.002" stroke="#C9C9C9" strokeWidth="3" strokeLinecap="round" />
                           <path fillRule="evenodd" clipRule="evenodd" d="M22.2827 21.0313C23.9057 19.4611 26.578 19.7406 27.9369 21.5069L29.6182 23.6921C30.7239 25.1293 30.6263 27.138 29.3138 28.4079L28.9954 28.7159C28.9815 28.7552 28.9478 28.8787 28.9853 29.1135C29.0695 29.6421 29.5232 30.7635 31.4278 32.6061C33.3316 34.4481 34.4922 34.8892 35.0432 34.9714C35.2929 35.0086 35.4236 34.9739 35.464 34.9601L36.008 34.4338C37.1748 33.3049 38.9679 33.0939 40.4126 33.8581L42.9597 35.2054C45.1408 36.3591 45.6919 39.2438 43.9049 40.9727L42.011 42.8051C41.4142 43.3824 40.6118 43.8638 39.6324 43.9527C37.2205 44.1715 31.5967 43.8924 25.6876 38.1753C20.1708 32.8378 19.1121 28.1832 18.9782 25.8898C18.9105 24.7302 19.4736 23.7491 20.19 23.056L22.2827 21.0313ZM26.336 22.6731C25.6605 21.7952 24.4016 21.7254 23.6927 22.4112L21.6001 24.4358C21.1602 24.8614 20.9486 25.3304 20.9748 25.7794C21.0812 27.6016 21.9363 31.8017 27.0977 36.7954C32.5126 42.0343 37.5139 42.1906 39.4468 42.0152C39.8417 41.9794 40.2345 41.7798 40.601 41.4252L42.4948 39.5928C43.2648 38.848 43.0949 37.4918 42.0046 36.915L39.4574 35.5678C38.754 35.1957 37.93 35.3184 37.418 35.8137L36.8108 36.4013L36.1058 35.7112C36.8108 36.4013 36.8099 36.4022 36.809 36.4031L36.807 36.4049L36.8028 36.4088L36.7942 36.417L36.7747 36.4346C36.7607 36.4471 36.7446 36.4607 36.7266 36.4753C36.6903 36.5045 36.6458 36.5375 36.5926 36.5722C36.4858 36.6418 36.3449 36.7175 36.1677 36.7816C35.8066 36.9125 35.3304 36.9828 34.7401 36.8947C33.5844 36.7223 32.0536 35.9557 30.0177 33.986C27.9825 32.017 27.188 30.5343 27.009 29.4118C26.9175 28.8378 26.9905 28.3743 27.1267 28.0226C27.1934 27.8503 27.272 27.7133 27.3442 27.6096C27.3802 27.558 27.4144 27.5147 27.4447 27.4796C27.4598 27.4621 27.4739 27.4466 27.4868 27.433L27.5051 27.4141L27.5135 27.4057L27.5174 27.4017L27.5194 27.3998C27.5203 27.3989 27.5213 27.398 28.2264 28.0879L27.5213 27.398L27.9037 27.028C28.4752 26.4752 28.5552 25.5574 28.0172 24.8582L26.336 22.6731Z" fill="#C9C9C9" />
                        </svg>
                     </div>
                     <div className="product_page_addition_body_content_right">
                        <div className="product_page_addition_body_content_right-title">
                           Бесплатная услуга
                        </div>
                        <CustomText className={'product_page_addition_body_content_right-text small'}>
                           <p>
                              Усиливаем результаты использования инструмента повторным звонком контактам со статусами отложенного звонка
                              (“неудобно говорить”, “перезвонить”, “уточнить решение”).
                           </p>
                        </CustomText>
                     </div>
                  </div>
                  <span className="line_top-bot"></span>
                  <span className="line_right-left"></span>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProductPageAddition;