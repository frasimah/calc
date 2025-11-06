import CustomText from '../../utilities/CustomText/CustomText';
import Benefits from '../Benefits/Benefits';
import BenefitsItem from '../Benefits/BenefitsItem';
import BenefitsItemContent from '../Benefits/BenefitsItemContent';
import BenefitsItemIcon from '../Benefits/BenefitsItemIcon';
import './UnderFirstBlock.scss'

function UnderFirstBlock() {
   return (
      <div className="second_block">
         <div className="container">
            <Benefits className="first_block_wrap_cards">
               <div className="col-md-6">
                  <BenefitsItem>
                     <BenefitsItemIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62"
                           viewBox="0 0 62 62"
                           fill="none">
                           <rect x="1" y="1" width="60" height="60" rx="12" stroke="#006AFE" />
                           <path
                              d="M29.4286 19C26.8259 19 24.7143 21.15 24.7143 23.8C24.7143 26.45 26.8259 28.6 29.4286 28.6C32.0312 28.6 34.1429 26.45 34.1429 23.8C34.1429 21.15 32.0312 19 29.4286 19ZM27.0714 30.2C23.1551 30.2 20 33.4125 20 37.4V38.2C20 39.975 21.3996 41.4 23.1429 41.4H32.5714V39.8H27.8571V33.4H32.5714V30.2438C32.3136 30.2125 32.0497 30.2 31.7857 30.2H27.0714ZM34.1429 30.2V35H29.4286V38.2H34.1429V43H37.2857V38.2H42V35H37.2857V30.2H34.1429Z"
                              fill="#006AFE" />
                        </svg>
                     </BenefitsItemIcon>
                     <BenefitsItemContent>
                        <CustomText className="first_block_wrap_cards_it_content-title">
                           Собираем контакты (мобильный номер и&nbsp;email)
                           скрытых пользователей в&nbsp;точке актуального интереса
                           к&nbsp;предложениям рекламодателя в&nbsp;цифровой среде
                        </CustomText>
                        <CustomText className="first_block_wrap_cards_it_content-text small ibm">
                           <p>
                              Передаем рекламодателю целевые лиды, квалифицированные собственным живым
                              колл-центром в режиме онлайн
                           </p>
                        </CustomText>
                     </BenefitsItemContent>
                  </BenefitsItem>
               </div>
               <div className="col-md-6">
                  <BenefitsItem>
                     <BenefitsItemIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62"
                           viewBox="0 0 62 62"
                           fill="none">
                           <rect x="1" y="1" width="60" height="60" rx="12" stroke="#006AFE" />
                           <path
                              d="M42.8195 36.7705C43.1941 37.8192 42.64 38.9718 41.5872 39.3343L31.3518 42.8584C30.3183 43.2143 29.1905 42.6745 28.8195 41.6463L23.2215 26.1349C22.9899 25.4931 23.1015 24.7775 23.5174 24.2366L24.4502 23.0238C24.7078 22.689 25.1454 22.5364 25.5487 22.6622C26.2531 22.8872 26.8943 23.1509 27.4551 23.4417C28.3186 23.8894 28.3844 25.0274 28.5593 25.9842C28.5823 26.1103 28.6161 26.2364 28.6612 26.3615C29.1058 27.598 30.4915 28.2568 31.753 27.8209C33.0146 27.3851 33.6867 26.027 33.2421 24.7905C32.7974 23.5541 31.4118 22.8953 30.1502 23.3311C30.0985 23.348 30.0429 23.3386 30.0024 23.3022C29.5213 22.8697 28.9497 22.4843 28.3229 22.1469C27.1697 21.5259 26.6737 20.0162 27.4696 18.9761C27.9234 18.3831 28.6851 18.1147 29.4104 18.2922L35.8258 19.8623C36.4787 20.0221 37.0077 20.4992 37.2338 21.1322L42.8195 36.7705ZM25.1693 22.0064C25.4784 21.5837 25.2925 20.9916 24.7819 20.8755C23.0381 20.479 20.5012 20.2952 18.6973 20.3608C18.3028 20.3752 18.0021 20.7065 18.0048 21.1013C18.0078 21.5435 18.3873 21.8895 18.8293 21.8773C20.5044 21.8309 22.8234 21.9991 24.3133 22.3183C24.6357 22.3874 24.9747 22.2725 25.1693 22.0064Z"
                              fill="#006AFE" />
                        </svg>
                     </BenefitsItemIcon>
                     <BenefitsItemContent>
                        <CustomText className="first_block_wrap_cards_it_content-title">
                           Отвечаем за&nbsp;качество поставляемых целевых лидов, снижаем стоимость
                           привлечения, не&nbsp;каннибализируем текущие каналы лидогенерации,
                           а&nbsp;дополняем
                           и&nbsp;оптимизируем их&nbsp;работу
                        </CustomText>
                        <CustomText className="first_block_wrap_cards_it_content-text small ibm">
                           <p>
                              Работаем в полном соответствии с ФЗ о защите персональных данных
                           </p>
                        </CustomText>
                     </BenefitsItemContent>
                  </BenefitsItem>
               </div>
            </Benefits>
         </div>
      </div>

   );
}

export default UnderFirstBlock;