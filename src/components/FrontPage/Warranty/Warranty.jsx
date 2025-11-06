import CustomText from '../../utilities/CustomText/CustomText';
import SectionHead from '../../utilities/SectionHead/SectionHead';
import SectionHeadIcon from '../../utilities/SectionHead/SectionHeadIcon';
import SectionHeadTitlte from '../../utilities/SectionHead/SectionHeadTitlte';
import Benefits from '../Benefits/Benefits';
import BenefitsItem from '../Benefits/BenefitsItem';
import BenefitsItemContent from '../Benefits/BenefitsItemContent';
import BenefitsItemIcon from '../Benefits/BenefitsItemIcon';
import './Warranty.scss'

function Warranty() {
   return (
      <section className="warranty">
         <div className="container">
            <div className="warranty_wrap">
               <SectionHead>
                  <SectionHeadIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                        <rect x="1" y="1" width="60" height="60" rx="12" fill="white" />
                        <rect x="1" y="1" width="60" height="60" rx="12" stroke="#C9C9C9" />
                        <path d="M32.0143 17.1794L42.1254 20.8779C43.2531 21.2903 44 22.3418 44 23.5164V31.0721C44 35.8752 41.218 40.2661 36.8137 42.414L31.9689 44.7768C31.3589 45.0744 30.6411 45.0744 30.0311 44.7768L25.1862 42.414C20.782 40.2661 18 35.8752 18 31.0721V23.5164C18 22.3418 18.747 21.2903 19.8745 20.8779L29.9857 17.1794C30.6396 16.9402 31.3604 16.9402 32.0143 17.1794ZM31 19.8179L20.8889 23.5164V31.0721C20.8889 34.8078 23.0527 38.223 26.4782 39.8935L31 42.099L35.5218 39.8935C38.9473 38.223 41.1111 34.8078 41.1111 31.0721V23.5164L31 19.8179ZM31 25.3579C32.5955 25.3579 33.8889 26.6195 33.8889 28.1758C33.8889 29.1386 33.3939 29.9885 32.6386 30.4969L32.4444 30.6168V35.2205C32.4444 35.9987 31.7978 36.6295 31 36.6295C30.2592 36.6295 29.6487 36.0856 29.5653 35.3848L29.5556 35.2205V30.6168C28.6921 30.1294 28.1111 29.2188 28.1111 28.1758C28.1111 26.6195 29.4045 25.3579 31 25.3579Z" fill="#C9C9C9" />
                     </svg>
                  </SectionHeadIcon>
                  <SectionHeadTitlte>
                     Гарантия Brand safety и наша контактная политика, прописанная в договоре
                  </SectionHeadTitlte>
               </SectionHead>
               <Benefits>
                  <div className="col-md-6">
                     <BenefitsItem>
                        <BenefitsItemIcon>
                           <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                              <rect x="1" y="1" width="60" height="60" rx="12" stroke="#006AFE" />
                              <path d="M23.9091 31.0002C23.9091 31.6529 24.4382 32.182 25.0909 32.182H36.9091C37.5618 32.182 38.0909 31.6529 38.0909 31.0002C38.0909 30.3475 37.5618 29.8184 36.9091 29.8184H25.0909C24.4382 29.8184 23.9091 30.3475 23.9091 31.0002Z" fill="#006AFE" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M31 44C38.1797 44 44 38.1797 44 31C44 23.8203 38.1797 18 31 18C23.8203 18 18 23.8203 18 31C18 38.1797 23.8203 44 31 44ZM31 41.6283C25.1302 41.6283 20.3717 36.8699 20.3717 31C20.3717 25.1302 25.1302 20.3717 31 20.3717C36.8699 20.3717 41.6283 25.1302 41.6283 31C41.6283 36.8699 36.8699 41.6283 31 41.6283Z" fill="#006AFE" />
                           </svg>
                        </BenefitsItemIcon>
                        <BenefitsItemContent>
                           <CustomText>
                              <p>
                                 Квалифицированный по твердому идентификатору пользователь попадает в стоп-лист и исключается
                                 из подбора по всем механикам на строго оговоренный срок.
                              </p>
                           </CustomText>
                        </BenefitsItemContent>
                     </BenefitsItem>
                  </div>
                  <div className="col-md-6">
                     <BenefitsItem>
                        <BenefitsItemIcon>
                           <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                              <rect x="1" y="1" width="60" height="60" rx="12" stroke="#006AFE" />
                              <path d="M32.7942 20.0025L44.7194 39.9924C45.5167 41.3291 44.5201 43 42.9252 43H19.0749C17.48 43 16.4832 41.3291 17.2807 39.9924L29.2057 20.0025C30.0032 18.6658 31.9968 18.6658 32.7942 20.0025ZM31 22.3418L20.271 40.3266H41.729L31 22.3418ZM31 35.8456C31.7629 35.8456 32.3812 36.4441 32.3812 37.1824C32.3812 37.9206 31.7629 38.5191 31 38.5191C30.2372 38.5191 29.6188 37.9206 29.6188 37.1824C29.6188 36.4441 30.2372 35.8456 31 35.8456ZM31 26.4887C31.7629 26.4887 32.3812 27.0871 32.3812 27.8254V33.1722C32.3812 33.9105 31.7629 34.5089 31 34.5089C30.2372 34.5089 29.6188 33.9105 29.6188 33.1722V27.8254C29.6188 27.0871 30.2372 26.4887 31 26.4887Z" fill="#006AFE" />
                           </svg>
                        </BenefitsItemIcon>
                        <BenefitsItemContent>
                           <CustomText>
                              <p>
                                 Контакт ни при каких обстоятельствах не попадает
                                 к конкурентам нашего заказчика в рамках его рекламной кампании, в условиях работы с несколькими конкурирующими компаниями в одной отраслевой нише.
                              </p>
                           </CustomText>
                        </BenefitsItemContent>
                     </BenefitsItem>
                  </div>
               </Benefits>
            </div>
         </div>
      </section>
   );
}

export default Warranty;