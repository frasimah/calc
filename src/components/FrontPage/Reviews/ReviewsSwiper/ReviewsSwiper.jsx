import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import CustomText from "../../../utilities/CustomText/CustomText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'swiper/css/effect-fade';
import './ReviewsSwiper.scss'

gsap.registerPlugin(ScrollTrigger);


function ReviewsSwiper() {
    const [startAnimate, setStartAnimate] = useState(false)
    const thisBlockRef = useRef(null)

    // Анимация линий
    useEffect(() => {
        const thisBlock = thisBlockRef.current
        ScrollTrigger.create({
            trigger: thisBlock,
            start: "top center",
            scrub: false,
            once: true,
            onEnter: () => {
                setStartAnimate(true)
            }
        });
    }, [startAnimate]);

    return (
        <div className='rev_swiper_block'>
            <h2 className='rev_swiper_block-title section_title white'>Кейсы</h2>
            <div className={`reviews_wrap_item_swiper ${startAnimate ? 'active' : ''}`} ref={thisBlockRef}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    speed={600}
                    className="sw_rev"
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    effect={'fade'}
                    loop={true}
                    autoHeight={true}
                    fadeEffect={{
                        crossFade: true
                    }}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                    simulateTouch={false}
                    pagination={{
                        clickable: true,
                        el: '.reviews_wrap_item_swiper_btns-pagination',
                        dynamicBullets: false,
                        dynamicMainBullets: 6,
                    }}
                    navigation={{
                        nextEl: '.reviews_wrap_item_swiper_btns-next',
                        prevEl: '.reviews_wrap_item_swiper_btns-prev',
                    }}
                    breakpoints={{
                        1: {
                            allowTouchMove: true,
                            simulateTouch: true
                        },
                        1200: {
                            allowTouchMove: false,
                            simulateTouch: false
                        },
                    }}
                // onSlideChangeTransitionStart={() => {
                //     setIsSlideChange(true)
                // }}
                // onSlideChangeTransitionEnd={() => {
                //     setIsSlideChange(false)
                // }}
                >
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="154" height="30"
                                            viewBox="0 0 154 30" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M57.2887 15.04C57.2887 23.9845 51.4159 30 42.6913 30C33.8025 30 27.8501 24.0237 27.8501 15.0008C27.8501 5.93707 33.7619 0 42.7734 0C51.4582 0 57.2887 6.05557 57.2887 15.04ZM36.9014 14.8799C36.9014 19.9722 39.022 22.9003 42.6913 22.9003C46.3199 22.9003 48.2764 20.0539 48.2764 14.6373C48.2764 9.86522 46.1972 7.01719 42.6499 7.01719C39.0627 7.01719 36.9014 9.98612 36.9014 14.8783V14.8799ZM12.6401 0.76225C19.002 0.76225 25.3208 2.56699 25.3208 10.9125C25.3208 17.4901 20.6327 20.4983 14.3935 20.4983H8.84896V29.3218H0V0.76145L12.6401 0.76225ZM8.84571 13.8374H13.126C15.2872 13.8374 16.7969 13.156 16.7969 10.8292C16.7969 8.7843 15.5724 7.78104 12.9635 7.78104H8.8449L8.84571 13.8374ZM86.8906 29.3186V0.76225H63.939V13.0319C63.939 17.6855 63.8172 22.8595 60.7995 22.8595C60.1863 22.8628 59.5825 22.7106 59.0461 22.4175V29.1961C60.1739 29.6381 61.3796 29.8567 62.5935 29.8391C72.7141 29.8391 72.7092 18.3332 72.7051 10.2463V8.10291H78.0424V29.3194L86.8906 29.3186ZM99.9816 9.62421H104.914C112.824 9.62421 116.373 13.2737 116.373 19.25C116.373 25.4265 112.34 29.277 104.385 29.277H91.0928V0.720615H99.9816V9.62421ZM99.9816 22.4592H104.063C105.978 22.4592 107.732 21.817 107.732 19.3293C107.732 16.8792 106.223 16.121 104.104 16.121H99.9865L99.9816 22.4592ZM140.834 29.3202V26.5466C149.352 26.5466 154 21.572 154 14.8343C154 8.69782 149.274 3.60387 140.834 3.60387V0.757447H132.109V3.60387C122.568 3.60387 118.816 9.58578 118.816 14.9215C118.816 21.6184 123.913 26.5523 132.109 26.5523V29.3202H140.834ZM127.705 14.9183C127.705 12.7925 128.765 9.78435 132.313 9.78435V20.3325C128.805 20.3325 127.705 17.4437 127.705 14.9183ZM140.63 20.2917V9.78435C144.259 9.78435 145.115 12.9927 145.115 14.9183C145.115 16.8824 144.426 20.2917 140.63 20.2917Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Сеть автомобильных дилеров, Москва
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за май 2024 года</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Найдено</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    15200
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    look alike аудитория
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    13907
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    177
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    квалифицированных лидов
                                                </div>
                                                <span
                                                    className="sw_rev_item_right_list_item-circle_second"></span>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item last"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Конвертировано в
                                                    сделку
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    10%
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    обращений
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title big">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                            <path d="M50 25C50 38.8068 38.8068 50 25 50C11.1932 50 0 38.8068 0 25C0 11.1932 11.1932 0 25 0C38.8068 0 50 11.1932 50 25Z" fill="white" />
                                            <path d="M23.3943 32.8356H20.5113V21.1492L17.9738 22.4901L16.7659 20.1276L20.5057 18.0015L21.3352 17.5458C21.5291 17.4626 21.7379 17.4197 21.9488 17.4196C22.7523 17.4196 23.3943 18.156 23.3943 19.0708V32.8333V32.8356ZM45.9477 19.0617V32.8344H43.0693V21.1446L40.5318 22.4844L39.3284 20.1276L43.067 18.0026L43.892 17.5458C44.075 17.4606 44.2932 17.414 44.5113 17.414C45.3113 17.414 45.9545 18.156 45.9545 19.0617C45.9545 19.1037 45.9477 19.0242 45.9477 19.0617ZM34.4772 28.364C33.9 29.3151 33.1284 29.7912 32.1363 29.7912C31.1545 29.7912 30.3784 29.3151 29.7818 28.3651C29.1897 27.4003 28.8977 26.2344 28.8977 24.8481C28.8977 23.4708 29.1897 22.3015 29.7818 21.3503C30.3784 20.3833 31.1557 19.9106 32.1375 19.9106C33.1284 19.9106 33.9 20.3833 34.4761 21.3503C35.0761 22.3015 35.3579 23.4708 35.3579 24.8481C35.3579 26.2344 35.0761 27.4003 34.4761 28.3651L34.4772 28.364ZM36.5204 19.5242C35.4261 18.0208 33.9545 17.2515 32.0932 17.2515C29.5829 17.2515 27.6272 18.8878 26.6738 21.2071C26.2102 22.3571 25.9943 23.6071 25.9943 24.989C25.9943 27.7367 26.9204 30.1628 28.8 31.6276C29.75 32.3696 30.842 32.731 32.0932 32.731C33.9545 32.731 35.4693 31.9606 36.5568 30.4549C37.6716 28.9412 38.1772 27.1196 38.1772 24.989C38.1772 22.864 37.6318 21.0344 36.5204 19.5242ZM8.78975 27.0208L10.7647 22.2651L12.7375 27.0208H8.78975ZM11.9716 18.2276C11.8726 17.9875 11.7054 17.7816 11.4908 17.6354C11.2761 17.4892 11.0233 17.409 10.7636 17.4049C10.2636 17.4049 9.8227 17.7037 9.60225 18.1401L3.27271 32.8344H6.36361L7.73634 29.5412H13.7954L15.1636 32.8356H18.2591L11.9716 18.2276Z" fill="#212121" />
                                        </svg>
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Группа компаний «А101» — один
                                        из крупнейших девелоперов Москвы
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за июль – сентябрь 2024 года</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    62103
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    по коду
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    65480
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    65480
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    look-a-like
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item last"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    170
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    MQL
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title big">
                                        <img src="./img/reviews/varicoz-logo.png" alt="" />
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Сеть клиник лазерной хирургии
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за август – сентябрь 2024 года</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    9000
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    по коду
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    10000
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    11000
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    look-a-like
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item last"
                                            >
                                                <div className="sw_rev_item_right_list_item-title"></div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    4%
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    конверсии в продажу
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title big">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="50"
                                            viewBox="0 0 91 50" fill="none">
                                            <path
                                                d="M22.9765 0.270508L30.1079 18.653H23.526L19.9421 9.07714L16.2562 18.653H14.7341L21.8624 0.270508H22.9765ZM35.6573 32.9609L39.9653 44.0649C40.3908 45.4446 41.2144 46.668 42.3327 47.5812C43.0499 48.0999 43.8893 48.4237 44.769 48.5211V49.9132C43.8406 49.8203 42.7034 49.7622 41.3574 49.7389C40.0112 49.716 38.6652 49.7045 37.3192 49.7045C35.509 49.7045 33.8149 49.716 32.2369 49.7389C30.6584 49.7629 29.3819 49.821 28.4074 49.9132V48.5211C30.0128 48.6654 31.617 48.2334 32.9329 47.3026C33.5827 46.5826 33.4435 45.0391 32.5155 42.6721L28.8806 32.9609H35.6573ZM10.748 32.9609L8.56428 38.634C7.73359 40.49 7.26094 42.4863 7.17118 44.5178C7.14369 45.1195 7.27773 45.7176 7.5594 46.2501C7.84106 46.7825 8.26009 47.2299 8.77299 47.5458C10.1547 48.235 11.686 48.5702 13.2292 48.5211V49.9132C11.9293 49.8203 10.5716 49.7622 9.15597 49.7389C7.7399 49.716 6.42864 49.7045 5.22219 49.7045C4.06178 49.7045 3.0754 49.716 2.26307 49.7389C1.50623 49.7582 0.750875 49.8164 0 49.9132V48.5211C1.06833 48.2105 2.04705 47.6493 2.85476 46.8842C4.07074 45.6381 4.97709 44.1239 5.50081 42.4634L9.18535 32.9609H10.748Z"
                                                fill="white" />
                                            <path
                                                d="M82.3963 23.5117V28.8612H81.6783V24.5782L78.7421 28.8612H77.8968V23.3827H78.6148V27.7403L81.6067 23.3827H82.3963V23.5117ZM51.1962 28.7312V23.3827H51.9304V25.8153L53.7045 23.8977L54.1141 23.3827H54.9824C54.2442 24.3152 53.4525 25.2041 52.6113 26.0449C53.5241 26.9318 54.3833 27.8722 55.1844 28.8612H54.3103L51.9304 26.3533V28.8612H51.1962V28.7312ZM59.2195 26.1827L57.3269 23.3827H58.2164L58.2556 23.4401C58.3302 23.5502 58.8912 24.3465 59.3211 24.946C59.5021 25.1986 59.6186 25.4073 59.6811 25.5049L61.1073 23.3796L62.0094 23.4161C60.826 25.2216 59.6424 27.0277 58.4586 28.8345L57.4761 28.8001L59.2195 26.1827ZM65.697 26.0773L63.856 23.3827H64.7473L66.0414 25.3029C66.1026 25.3938 66.1553 25.4799 66.1985 25.5606L66.2319 25.6255L67.6872 23.3827H68.5564L66.7067 26.0773L68.679 28.8612H67.7848L66.3879 26.871C66.3221 26.7771 66.2654 26.69 66.2204 26.6106L66.1839 26.5464L64.6284 28.8612H63.7324L65.697 26.0773ZM70.9678 28.7312V23.3827H71.702V25.7194H74.4811V23.3827H75.2146V28.8612H74.4811V26.3972H71.702V28.8612H70.9678V28.7312ZM8.09586 28.6822L10.2286 23.3827H10.9486C11.6828 25.2091 12.4177 27.0352 13.1532 28.8612H12.3356L11.7115 27.2665H9.44945L8.82534 28.8612H8.02393L8.09586 28.6822ZM10.5761 24.3448L9.69362 26.5954H11.4599L10.5761 24.3448ZM16.9222 24.0449H16.1917V25.7116H16.9614C17.3171 25.7375 17.6726 25.6576 17.983 25.4819C18.0858 25.4089 18.1682 25.3107 18.2223 25.1968C18.2765 25.0829 18.3006 24.957 18.2923 24.8311C18.2964 24.7051 18.269 24.5799 18.2126 24.4671C18.1597 24.3694 18.0791 24.2895 17.981 24.2374C17.846 24.1672 17.7006 24.1191 17.5504 24.0949C17.343 24.0589 17.1327 24.0422 16.9222 24.0449ZM16.9614 26.3425H16.1917V28.1901H17.2613C17.4319 28.1931 17.6021 28.1715 17.7665 28.126C17.8992 28.0886 18.0232 28.0252 18.1313 27.9395C18.2267 27.8632 18.3022 27.765 18.3514 27.6532C18.4034 27.5297 18.4288 27.3967 18.4261 27.2627C18.4286 27.1337 18.398 27.0061 18.3373 26.8923C18.2696 26.7755 18.175 26.6766 18.0613 26.6038C17.7283 26.4107 17.3457 26.3197 16.9614 26.3425ZM15.4575 28.7312V23.3827H17.0009C18.3565 23.3827 19.034 23.8549 19.0333 24.7994C19.0349 24.955 19.0099 25.1098 18.9593 25.257C18.9106 25.3989 18.8357 25.5304 18.7385 25.6447C18.6404 25.7604 18.5228 25.8579 18.391 25.9328C18.351 25.9561 18.3097 25.9772 18.2674 25.9959C18.4889 26.0744 18.6882 26.2051 18.8486 26.3769C18.9619 26.4971 19.0511 26.6379 19.1117 26.7916C19.171 26.9468 19.2009 27.1118 19.1998 27.2779C19.2021 27.4889 19.1595 27.6979 19.0748 27.8912C18.9901 28.0844 18.8654 28.2575 18.7088 28.3988C18.5446 28.5569 18.347 28.676 18.1306 28.7474C17.8828 28.8269 17.6238 28.8653 17.3636 28.8612H15.4575V28.7312ZM21.7243 28.7312V23.3827H23.4885C23.7544 23.379 24.0192 23.4151 24.2744 23.4897C24.5002 23.5569 24.71 23.6692 24.8911 23.82C25.0638 23.964 25.1996 24.1472 25.2872 24.3543C25.3776 24.5756 25.4223 24.813 25.4186 25.052C25.4219 25.2902 25.3749 25.5265 25.2808 25.7454C25.1863 25.9575 25.0449 26.1454 24.8671 26.2948C24.485 26.6169 23.9956 26.7833 23.4963 26.7609H22.4575V28.8612H21.7243V28.7312ZM23.4801 24.0605H22.4575V26.1138H23.4885C23.8017 26.132 24.1104 26.0326 24.3541 25.8352C24.4551 25.7459 24.5334 25.634 24.5827 25.5086C24.6373 25.3627 24.6639 25.2078 24.6611 25.052C24.6639 24.9062 24.6383 24.7612 24.5858 24.6251C24.537 24.5077 24.4608 24.4036 24.3636 24.3215C24.2563 24.232 24.1313 24.1662 23.9968 24.1284C23.8288 24.0807 23.6547 24.0578 23.4801 24.0605ZM30.3784 23.303C30.7413 23.2983 31.1015 23.3657 31.4382 23.5012C31.7611 23.6353 32.0512 23.8378 32.2882 24.0949C32.5342 24.3556 32.7233 24.6647 32.8434 25.0024C32.9698 25.3657 33.032 25.7484 33.0271 26.1331C33.0511 26.8764 32.7835 27.5996 32.2814 28.1482C32.044 28.4085 31.7534 28.6148 31.4294 28.7531C31.0964 28.8912 30.7388 28.9603 30.3784 28.9561C30.0145 28.9605 29.6532 28.8939 29.3149 28.7599C28.9932 28.6282 28.7043 28.4274 28.4686 28.1719C28.2228 27.911 28.0337 27.602 27.9134 27.2644C27.7869 26.9008 27.7247 26.518 27.7296 26.1331C27.7255 25.7564 27.7883 25.3821 27.915 25.0274C28.0392 24.6901 28.2297 24.3812 28.4753 24.1189C28.7124 23.8564 29.003 23.6478 29.3274 23.5069C29.6602 23.3681 30.0178 23.2987 30.3784 23.303ZM28.4952 26.1331C28.4673 26.6987 28.6528 27.2543 29.015 27.6896C29.1789 27.8751 29.382 28.0216 29.6097 28.1185C29.8539 28.2168 30.1152 28.2652 30.3784 28.261C30.6336 28.2715 30.8881 28.2258 31.1237 28.1271C31.3593 28.0283 31.5703 27.879 31.7418 27.6896C31.9162 27.4926 32.0484 27.2619 32.1301 27.0118C32.2217 26.7281 32.2661 26.4312 32.2615 26.1331C32.29 25.565 32.1045 25.0068 31.7418 24.5687C31.5783 24.3817 31.3751 24.2336 31.147 24.1351C30.653 23.941 30.1038 23.941 29.6097 24.1351C29.3817 24.2336 29.1785 24.3817 29.015 24.5687C28.8407 24.7665 28.7085 24.9977 28.6266 25.2482C28.535 25.5341 28.4906 25.8329 28.4952 26.1331ZM35.6225 28.7312V23.3827H37.3868C37.6527 23.379 37.9177 23.4151 38.173 23.4897C38.3987 23.5569 38.6084 23.6692 38.7893 23.82C38.9622 23.964 39.0981 24.1471 39.1858 24.3543C39.2761 24.5757 39.3206 24.813 39.3169 25.052C39.3201 25.2902 39.2732 25.5265 39.1791 25.7454C39.0848 25.9576 38.9433 26.1456 38.7654 26.2948C38.3832 26.6169 37.8938 26.7833 37.3945 26.7609H36.3561V28.8612H35.6225V28.7312ZM37.3793 24.0605H36.3561V26.1138H37.3868C37.6999 26.132 38.0086 26.0326 38.2524 25.8352C38.3533 25.7459 38.4317 25.634 38.481 25.5086C38.5362 25.3629 38.5629 25.2078 38.5597 25.052C38.5624 24.9062 38.5367 24.7612 38.484 24.6251C38.4353 24.5076 38.3591 24.4035 38.2618 24.3215C38.1547 24.232 38.0298 24.1661 37.8954 24.1284C37.7276 24.0808 37.5537 24.0579 37.3793 24.0605ZM40.5404 28.6822L42.6731 23.3827H43.3932C44.1274 25.2091 44.8622 27.0352 45.5978 28.8612H44.7802L44.1571 27.2665H41.894L41.2709 28.8612H40.4685L40.5404 28.6822ZM43.0217 24.3448L42.1382 26.5954H43.9055L43.0217 24.3448Z"
                                                fill="white" />
                                            <path
                                                d="M65.9854 0V1.41201C64.7531 1.4015 63.5265 1.58009 62.3484 1.94156C61.959 2.07555 61.6063 2.29858 61.3182 2.5929C61.0302 2.88722 60.8148 3.24471 60.6892 3.63692C60.3537 4.8908 60.2108 6.18841 60.2654 7.48526V18.5261H53.697V7.48526C53.7518 6.18845 53.6091 4.89085 53.2739 3.63692C53.1484 3.24456 52.933 2.88695 52.6448 2.59261C52.3566 2.29826 52.0036 2.07532 51.614 1.94156C50.4359 1.58004 49.2093 1.40144 47.9771 1.41201V0C48.9659 0.0469433 50.2605 0.0938862 51.8608 0.140829C53.4627 0.187773 55.1814 0.211415 57.0172 0.211752C58.6646 0.211752 60.3006 0.18811 61.9253 0.140829C63.5487 0.0938862 64.9021 0.0469433 65.9854 0ZM60.2654 32.8343V42.5137C60.2152 43.7991 60.3581 45.0847 60.6892 46.3276C60.8075 46.7235 61.0204 47.0847 61.3095 47.38C61.5985 47.6752 61.9551 47.8957 62.3484 48.0223C63.5319 48.3641 64.754 48.5539 65.9854 48.587V50C64.9026 49.9051 63.5493 49.8461 61.9253 49.823C60.3008 49.8001 58.6648 49.7883 57.0172 49.7876C55.181 49.7876 53.4622 49.7994 51.8608 49.823C50.2604 49.8467 48.9658 49.9057 47.9771 50V48.587C49.2084 48.5539 50.4306 48.3642 51.614 48.0223C52.0075 47.8959 52.3643 47.6755 52.6535 47.3803C52.9427 47.085 53.1557 46.7237 53.2739 46.3276C53.6047 45.0846 53.7474 43.799 53.697 42.5137V32.8343H60.2654ZM69.2468 18.5261L75.3784 10.7345C76.2812 9.58656 81.3473 4.13 80.0454 2.57715C79.5082 2.13423 78.8879 1.80302 78.221 1.60295C77.5541 1.40287 76.8539 1.33796 76.1616 1.41201V0C77.5267 0.0469433 78.9154 0.0938862 80.3277 0.140829C81.7401 0.187773 83.0583 0.211415 84.2824 0.211752C86.8721 0.211752 88.8732 0.141168 90.2858 0V1.41201C88.5557 1.48609 86.8515 1.85856 85.2483 2.51299C83.3855 3.54201 81.737 4.91824 80.3919 6.56733L70.9823 18.5261H69.2468Z"
                                                fill="white" />
                                            <path
                                                d="M78.4137 32.834L84.9723 46.3273C85.1143 46.7106 85.3356 47.0596 85.6217 47.3517C85.9078 47.6437 86.2522 47.8721 86.6325 48.022C87.8158 48.3638 89.0378 48.5535 90.2691 48.5867V49.9997C89.1864 49.9048 87.8328 49.8458 86.2083 49.8227C84.5846 49.7998 82.9485 49.7879 81.3002 49.7873C79.464 49.7873 77.7456 49.7991 76.1449 49.8227C74.5442 49.8464 73.2496 49.9054 72.2611 49.9997V48.5867C73.4925 48.5535 74.7146 48.3638 75.898 48.022C76.334 47.8634 76.6964 47.55 76.9162 47.1414C77.136 46.7329 77.1978 46.2577 77.0898 45.8065L71.8457 32.834H78.4137Z"
                                                fill="white" />
                                        </svg>
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        «Аврора Кухни» - производитель кухонной мебели и мебели для дома
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за август – сентябрь 2024 года</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    1276
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    по коду
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    1276
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    26
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    MQL
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-6">
                                            <div className="sw_rev_item_right_list_item inline "
                                            >
                                                <div className="sw_rev_item_right_list_item_it">
                                                    <div className="sw_rev_item_right_list_item-title"></div>
                                                    <div className="sw_rev_item_right_list_item-num">
                                                        34,5%
                                                    </div>
                                                    <div className="sw_rev_item_right_list_item-text">
                                                        конверсии в продажу
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-6">
                                            <div className="sw_rev_item_right_list_item inline "
                                            >
                                                <div className="sw_rev_item_right_list_item_it">
                                                    <div className="sw_rev_item_right_list_item-title"></div>
                                                    <div className="sw_rev_item_right_list_item-num">
                                                        3%
                                                    </div>
                                                    <div className="sw_rev_item_right_list_item-text">
                                                        доля рекламных расходов
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title">
                                        <svg width="198" height="40" viewBox="0 0 198 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M65.2884 33.1857C63.3972 33.1857 61.8842 32.6795 60.7496 31.6673C59.6148 30.6315 59.0475 29.1838 59.0475 27.324V19.8028H55.8916V14.7886H59.0475V10.1982H65.3239V14.7886H69.8982V19.8028H65.3239V25.6291C65.3239 26.406 65.4775 26.9592 65.7849 27.2887C66.1158 27.6183 66.6596 27.7831 67.416 27.7831C68.267 27.7831 69.0945 27.5712 69.8982 27.1475V32.1263C68.7635 32.8326 67.2268 33.1857 65.2884 33.1857Z"
                                                fill="white" />
                                            <path
                                                d="M79.551 33.1852C77.5652 33.1852 75.9932 32.526 74.8349 31.2078C73.7001 29.8659 73.1328 28.0651 73.1328 25.8052V14.7881H79.4091V24.6399C79.4091 25.6521 79.6455 26.4055 80.1183 26.8998C80.5911 27.3706 81.2176 27.606 81.9977 27.606C83.227 27.606 84.2317 27.0764 85.0118 26.017V14.7881H91.2882V32.7261H85.0118V30.7134C83.4516 32.3612 81.6313 33.1852 79.551 33.1852Z"
                                                fill="white" />
                                            <path
                                                d="M103.379 33.1857C101.488 33.1857 99.9752 32.6795 98.8405 31.6673C97.7057 30.6315 97.1384 29.1838 97.1384 27.324V19.8028H93.9824V14.7886H97.1384V10.1982H103.414V14.7886H107.989V19.8028H103.414V25.6291C103.414 26.406 103.568 26.9592 103.875 27.2887C104.207 27.6183 104.75 27.7831 105.507 27.7831C106.358 27.7831 107.185 27.5712 107.989 27.1475V32.1263C106.854 32.8326 105.317 33.1857 103.379 33.1857Z"
                                                fill="white" />
                                            <path
                                                d="M119.38 40.0002C116.307 40.0002 113.931 39.4941 112.252 38.4818V33.0439C114.144 34.1974 116.295 34.7742 118.706 34.7742C119.534 34.7742 120.302 34.68 121.011 34.4917C121.791 34.2798 122.453 33.8325 122.997 33.1499C123.565 32.4672 123.848 31.6197 123.848 30.6075V29.6894C122.43 31.2195 120.609 31.9846 118.387 31.9846C116.047 31.9846 114.132 31.1489 112.643 29.4775C111.154 27.8297 110.409 25.7228 110.409 23.1568C110.409 20.5909 111.154 18.484 112.643 16.8362C114.132 15.1648 116.047 14.3291 118.387 14.3291C120.562 14.3291 122.383 15.1059 123.848 16.6596V14.7881H130.124V30.219C130.124 31.8198 129.805 33.2676 129.167 34.5623C128.553 35.857 127.701 36.8928 126.614 37.6697C124.487 39.2234 122.076 40.0002 119.38 40.0002ZM120.267 26.7586C121.875 26.7586 123.068 26.2054 123.848 25.0989V21.2147C123.021 20.1083 121.827 19.5551 120.267 19.5551C119.155 19.5551 118.27 19.8965 117.607 20.5791C116.969 21.2383 116.65 22.0975 116.65 23.1568C116.65 24.2162 116.969 25.0872 117.607 25.7699C118.27 26.429 119.155 26.7586 120.267 26.7586Z"
                                                fill="white" />
                                            <path
                                                d="M147.204 23.7571C147.204 22.6036 146.825 21.6385 146.069 20.8616C145.312 20.0612 144.367 19.661 143.232 19.661C142.097 19.661 141.151 20.0612 140.395 20.8616C139.639 21.6385 139.26 22.6036 139.26 23.7571C139.26 24.9342 139.627 25.9111 140.36 26.6879C141.116 27.4648 142.073 27.8532 143.232 27.8532C144.39 27.8532 145.336 27.4648 146.069 26.6879C146.825 25.9111 147.204 24.9342 147.204 23.7571ZM150.501 30.5015C148.609 32.2906 146.186 33.1852 143.232 33.1852C140.276 33.1852 137.853 32.2906 135.962 30.5015C134.047 28.7124 133.09 26.4643 133.09 23.7571C133.09 21.0735 134.047 18.8371 135.962 17.048C137.901 15.2354 140.324 14.3291 143.232 14.3291C146.139 14.3291 148.562 15.2354 150.501 17.048C152.415 18.8371 153.373 21.0735 153.373 23.7571C153.373 26.4643 152.415 28.7124 150.501 30.5015Z"
                                                fill="white" />
                                            <path
                                                d="M169.712 23.7571C169.712 22.6036 169.333 21.6385 168.577 20.8616C167.821 20.0612 166.875 19.661 165.74 19.661C164.605 19.661 163.66 20.0612 162.903 20.8616C162.147 21.6385 161.769 22.6036 161.769 23.7571C161.769 24.9342 162.135 25.9111 162.868 26.6879C163.624 27.4648 164.582 27.8532 165.74 27.8532C166.899 27.8532 167.844 27.4648 168.577 26.6879C169.333 25.9111 169.712 24.9342 169.712 23.7571ZM173.01 30.5015C171.119 32.2906 168.696 33.1852 165.74 33.1852C162.786 33.1852 160.363 32.2906 158.471 30.5015C156.557 28.7124 155.599 26.4643 155.599 23.7571C155.599 21.0735 156.557 18.8371 158.471 17.048C160.41 15.2354 162.833 14.3291 165.74 14.3291C168.648 14.3291 171.072 15.2354 173.01 17.048C174.925 18.8371 175.882 21.0735 175.882 23.7571C175.882 26.4643 174.925 28.7124 173.01 30.5015Z"
                                                fill="white" />
                                            <path
                                                d="M191.724 30.7128C190.494 32.3606 188.698 33.1846 186.334 33.1846C183.969 33.1846 182.008 32.29 180.447 30.5009C178.887 28.6883 178.106 26.4402 178.106 23.7565C178.106 21.0729 178.887 18.8365 180.447 17.0474C182.008 15.2348 183.969 14.3285 186.334 14.3285C188.651 14.3285 190.447 15.1524 191.724 16.8002V8.00781H198V32.7255H191.724V30.7128ZM188.142 27.8879C189.702 27.8879 190.896 27.2523 191.724 25.9811V21.5319C190.896 20.2607 189.702 19.6251 188.142 19.6251C187.031 19.6251 186.121 20.0136 185.411 20.7904C184.702 21.5672 184.348 22.5559 184.348 23.7565C184.348 24.9571 184.702 25.9458 185.411 26.7226C186.121 27.4995 187.031 27.8879 188.142 27.8879Z"
                                                fill="white" />
                                            <path
                                                d="M1.4628 31.8066C-3.49064 25.1925 5.48312 21.5244 8.44264 15.103C11.19 9.14178 8.44264 1.01962 15.9854 0.0807535C26.1174 -1.18042 28.369 12.6366 26.3426 20.1477C24.3162 27.6587 6.41623 38.4209 1.4628 31.8066Z"
                                                fill="white" />
                                            <path
                                                d="M16.6612 37.7487C11.3475 34.4304 19.4757 17.6818 19.4757 17.6818C19.4757 17.6818 25.8926 3.44438 35.3491 3.44438C46.7485 3.41788 34.336 15.1034 34.336 20.1482C34.336 25.1928 38.1637 25.5292 37.6007 32.9282C37.0378 40.3272 23.3033 41.8966 16.6612 37.7487Z"
                                                fill="white" />
                                            <path
                                                d="M1.4628 31.8066C-3.49064 25.1925 5.48312 21.5244 8.44264 15.103C11.19 9.14178 8.44264 1.01962 15.9854 0.0807535C26.1174 -1.18042 28.369 12.6366 26.3426 20.1477C24.3162 27.6587 6.41623 38.4209 1.4628 31.8066Z"
                                                fill="white" />
                                        </svg>

                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Платформа с дистанционными занятиями с репетиторами по школьным предметам
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за август 2022 года – январь 2023 года</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Принято</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    33525
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    номеров на вход
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    14885
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    успешных диалогов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    1172
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    квалифицированных лидов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-6">
                                            <div className="sw_rev_item_right_list_item inline "
                                            >
                                                <div className="sw_rev_item_right_list_item_it">
                                                    <div className="sw_rev_item_right_list_item-title"></div>
                                                    <div className="sw_rev_item_right_list_item-num">
                                                        ≈ 43%
                                                    </div>
                                                    <div className="sw_rev_item_right_list_item-text">
                                                        прошли пробный урок
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-6">
                                            <div className="sw_rev_item_right_list_item inline "
                                            >
                                                <div className="sw_rev_item_right_list_item_it">
                                                    <div className="sw_rev_item_right_list_item-title"></div>
                                                    <div className="sw_rev_item_right_list_item-num">
                                                        13%
                                                    </div>
                                                    <div className="sw_rev_item_right_list_item-text">
                                                        конверсии в продажу
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title big">
                                        <img src="./img/reviews/authoworld.png" alt="" />
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Крупнейший автомобильный ритейлер
                                    </div>
                                    <CustomText className='sw_rev_item_left-text white'>
                                        <p>Автомир-Haval в Самаре</p>
                                    </CustomText>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за май – сентябрь 2024 года</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    10759
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    по коду
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    13900
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    657
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    MQL
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item last"
                                            >
                                                <div className="sw_rev_item_right_list_item-title"></div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    8%
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    конверсии в продажу
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title big">
                                        <svg width="284" height="95" viewBox="0 0 284 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2054_23)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.57 94.4497H6.08L2.16 89.3097V94.4497H0V83.4497H2.16V88.2997L5.92 83.4497H8.41L4.35 88.8097L8.57 94.4497ZM23.57 83.4497H25.73L22.44 91.4497C21.56 93.5764 20.12 94.5764 18.12 94.4497V92.4497C18.6035 92.5175 19.0961 92.4336 19.53 92.2097C19.9171 91.9665 20.2287 91.6202 20.43 91.2097L16.85 83.5397H19.01L21.41 88.8397L23.57 83.5397V83.4497ZM43.48 94.4497H41.06L38.93 90.8797L36.8 94.4497H34.35L37.71 88.8297L34.53 83.4797H37L39 86.7697L41 83.4797H43.44L40.26 88.8097L43.63 94.4497H43.48ZM61.58 92.9997C60.6402 93.9534 59.3981 94.5505 58.0664 94.6888C56.7346 94.8271 55.3963 94.4981 54.2806 93.7579C53.1648 93.0178 52.3413 91.9127 51.9509 90.632C51.5605 89.3513 51.6277 87.9747 52.1409 86.738C52.6541 85.5014 53.5814 84.4818 54.7639 83.8538C55.9463 83.2258 57.3104 83.0286 58.6223 83.2959C59.9342 83.5632 61.1123 84.2785 61.9548 85.3191C62.7973 86.3597 63.2516 87.6609 63.24 88.9997C63.2472 89.7439 63.1039 90.4819 62.8187 91.1693C62.5334 91.8567 62.1121 92.4793 61.58 92.9997ZM55 91.5397C55.6735 92.1828 56.5688 92.5416 57.5 92.5416C58.4312 92.5416 59.3265 92.1828 60 91.5397C60.334 91.2028 60.5951 90.8008 60.7671 90.3586C60.9391 89.9165 61.0184 89.4438 61 88.9697C61.0188 88.4926 60.9398 88.0167 60.7678 87.5713C60.5958 87.1259 60.3345 86.7204 60 86.3797C59.3265 85.7366 58.4312 85.3778 57.5 85.3778C56.5688 85.3778 55.6735 85.7366 55 86.3797C54.6617 86.7239 54.3982 87.1343 54.2261 87.5852C54.054 88.0361 53.977 88.5177 54 88.9997C53.9816 89.4738 54.0609 89.9465 54.2329 90.3886C54.4049 90.8308 54.666 91.2328 55 91.5697V91.5397ZM79.2 83.4797H81.35V94.4797H79.22V89.9097H75.15V94.4497H73V83.4497H75.16V87.8097H79.23V83.4797H79.2ZM97.84 83.4797H100V94.4797H97.86V89.9097H93.79V94.4497H91.63V83.4497H93.79V87.8097H97.86V83.4797H97.84ZM117.3 94.4797L116.64 92.4797H112.27L111.61 94.4797H109.3L113.14 83.4797H115.82L119.67 94.4797H117.3ZM112.96 90.4797H115.96L114.48 85.9997L113 90.4597L112.96 90.4797ZM136.8 83.4797V94.4797H134.64V90.6397H133.4L130.88 94.4497H128.45L131.13 90.4497C130.442 90.2096 129.847 89.7581 129.43 89.1597C128.998 88.5827 128.766 87.8805 128.77 87.1597C128.77 86.6809 128.864 86.2067 129.048 85.7644C129.232 85.3221 129.501 84.9204 129.84 84.5823C130.179 84.2442 130.581 83.9763 131.024 83.7939C131.467 83.6116 131.941 83.5184 132.42 83.5197L136.8 83.4797ZM132.42 88.7497H134.64V85.5097H132.42C132.221 85.5066 132.024 85.547 131.843 85.6282C131.661 85.7094 131.5 85.8294 131.37 85.9797C131.079 86.2871 130.921 86.6967 130.93 87.1197C130.923 87.5455 131.08 87.9575 131.37 88.2697C131.5 88.4213 131.661 88.5428 131.842 88.6257C132.023 88.7086 132.221 88.7509 132.42 88.7497ZM172.83 85.9097C173.261 86.2934 173.606 86.764 173.842 87.2905C174.078 87.8171 174.201 88.3876 174.201 88.9647C174.201 89.5418 174.078 90.1124 173.842 90.6389C173.606 91.1654 173.261 91.636 172.83 92.0197C171.792 92.861 170.514 93.3512 169.18 93.4197V94.6897H167.07V93.4197C165.742 93.3334 164.474 92.8372 163.44 91.9997C163.015 91.6144 162.675 91.1445 162.443 90.62C162.211 90.0956 162.09 89.5283 162.09 88.9547C162.09 88.3811 162.211 87.8138 162.443 87.2894C162.675 86.7649 163.015 86.295 163.44 85.9097C164.482 85.075 165.757 84.5856 167.09 84.5097V83.2497H169.2V84.5197C170.533 84.5854 171.811 85.072 172.85 85.9097H172.83ZM169.18 91.4397C171.09 91.2197 172.04 90.4397 172.04 88.9697C172.04 87.4997 171.09 86.6997 169.18 86.4797V91.4797V91.4397ZM164.18 88.9697C164.18 90.403 165.13 91.223 167.03 91.4297V86.4897C165.13 86.6997 164.18 87.4897 164.18 88.9697ZM190.48 94.4497L189.82 92.4497H185.45L184.79 94.4497H182.46L186.3 83.4497H189L192.85 94.4497H190.48ZM186.14 90.4497H189.14L187.71 85.9997L186.2 90.4797L186.14 90.4497ZM206.32 87.6297C207.282 87.5911 208.222 87.9282 208.94 88.5697C209.587 89.2248 209.95 90.1087 209.95 91.0297C209.95 91.9507 209.587 92.8346 208.94 93.4897C208.231 94.1521 207.29 94.5109 206.32 94.4897H202.12V83.4897H209.01V85.5597H204.28V87.6497L206.32 87.6297ZM206.32 92.4197C206.708 92.4362 207.087 92.3038 207.38 92.0497C207.522 91.9258 207.634 91.7716 207.709 91.5985C207.783 91.4255 207.818 91.2379 207.81 91.0497C207.818 90.8614 207.784 90.6736 207.71 90.5004C207.635 90.3273 207.522 90.1732 207.38 90.0497C207.083 89.8035 206.706 89.6754 206.32 89.6897H204.32V92.4597L206.32 92.4197ZM223.6 83.4197C224.093 83.4093 224.582 83.4987 225.039 83.6826C225.497 83.8665 225.912 84.141 226.26 84.4897C226.951 85.1848 227.338 86.1249 227.338 87.1047C227.338 88.0846 226.951 89.0246 226.26 89.7197C225.912 90.0684 225.497 90.3429 225.039 90.5268C224.582 90.7107 224.093 90.8001 223.6 90.7897H221.67V94.3897H219.51V83.3897L223.6 83.4197ZM223.6 88.7697C223.813 88.7754 224.025 88.7355 224.222 88.6527C224.418 88.5699 224.595 88.4462 224.74 88.2897C225.035 87.9656 225.199 87.5431 225.199 87.1047C225.199 86.6664 225.035 86.2438 224.74 85.9197C224.595 85.7645 224.418 85.6423 224.221 85.5612C224.024 85.4802 223.813 85.4421 223.6 85.4497H221.67V88.7697H223.6ZM243.32 94.3897V87.7597L238.62 94.4497H237V83.4497H239.16V90.1597L243.86 83.4497H245.5V94.4497L243.32 94.3897ZM264.32 94.3897H261.83L258 89.3097V94.4497H255.8V83.4497H258V88.2997L261.76 83.4497H264.25L260.19 88.7797L264.4 94.4197L264.32 94.3897ZM280.94 94.3897L280.29 92.3897H276L275.34 94.3897H273L276.84 83.3897H279.52L283.37 94.3897H280.94ZM276.61 90.3897H279.61L278.16 85.9997L276.61 90.3897Z" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M39.68 13.67H29.95H24.1L29.42 5.92004V2.04004H39.96L39.95 5.92004L45.28 13.67H39.68Z" fill="#FBC148" />
                                                <path d="M65.29 38.9702H51.01V68.3502H65.29V38.9702Z" fill="#FBC148" />
                                                <path d="M48.97 38.9702H20V68.3502H48.97V38.9702Z" fill="#FBC148" />
                                                <path d="M45.71 15.71H23.67V22.24H45.71V15.71Z" fill="white" />
                                                <path d="M44.48 33.6699H35.5V36.9299H44.48V33.6699Z" fill="white" />
                                                <path d="M33.87 33.6699H24.89V36.9299H33.87V33.6699Z" fill="white" />
                                                <path d="M17.95 49.1699H2.04004V68.3499H17.95V49.1699Z" fill="#FBC148" />
                                                <path d="M17.95 38.9702H2.04004V47.1302H17.95V38.9702Z" fill="#FBC148" />
                                                <path d="M44.07 54.8901H25.3V63.8701H44.07V54.8901Z" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M21.63 24.28V13.67L27.71 4.81V2V0H41.71V2V4.81L47.8 13.67V24.28H21.63ZM41.42 16.53C41.1548 16.53 40.9004 16.6354 40.7129 16.8229C40.5254 17.0104 40.42 17.2648 40.42 17.53C40.42 17.7952 40.5254 18.0496 40.7129 18.2371C40.9004 18.4246 41.1548 18.53 41.42 18.53H43.42C43.6852 18.53 43.9396 18.4246 44.1271 18.2371C44.3146 18.0496 44.42 17.7952 44.42 17.53C44.42 17.2648 44.3146 17.0104 44.1271 16.8229C43.9396 16.6354 43.6852 16.53 43.42 16.53H41.42ZM24.1 13.67H45.28L40 5.92V2H29.42V5.92L24.1 13.67ZM23.67 15.67V22.2H45.67V15.71L23.67 15.67Z" fill="#1B1B1B" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M44.07 63.86V54.86H25.3V63.86H44.07ZM43.26 44.86C43.26 44.5948 43.3654 44.3404 43.5529 44.1529C43.7404 43.9654 43.9948 43.86 44.26 43.86H46.26C46.5252 43.86 46.7796 43.9654 46.9671 44.1529C47.1546 44.3404 47.26 44.5948 47.26 44.86C47.26 45.1252 47.1546 45.3796 46.9671 45.5671C46.7796 45.7546 46.5252 45.86 46.26 45.86H44.26C43.9948 45.86 43.7404 45.7546 43.5529 45.5671C43.3654 45.3796 43.26 45.1252 43.26 44.86ZM55.3 41H61.42C61.6852 41 61.9396 41.1054 62.1271 41.2929C62.3146 41.4804 62.42 41.7348 62.42 42C62.42 42.2652 62.3146 42.5196 62.1271 42.7071C61.9396 42.8946 61.6852 43 61.42 43H55.3C55.0348 43 54.7804 42.8946 54.5929 42.7071C54.4054 42.5196 54.3 42.2652 54.3 42C54.3 41.7348 54.4054 41.4804 54.5929 41.2929C54.7804 41.1054 55.0348 41 55.3 41ZM44.3 41H46.3C46.5652 41 46.8196 41.1054 47.0071 41.2929C47.1946 41.4804 47.3 41.7348 47.3 42C47.3 42.2652 47.1946 42.5196 47.0071 42.7071C46.8196 42.8946 46.5652 43 46.3 43H44.3C44.0348 43 43.7804 42.8946 43.5929 42.7071C43.4054 42.5196 43.3 42.2652 43.3 42C43.3 41.7348 43.4054 41.4804 43.5929 41.2929C43.7804 41.1054 44.0348 41 44.3 41ZM8.77 50.4H11.63C11.8952 50.4 12.1496 50.5054 12.3371 50.6929C12.5246 50.8804 12.63 51.1348 12.63 51.4C12.63 51.6652 12.5246 51.9196 12.3371 52.1071C12.1496 52.2946 11.8952 52.4 11.63 52.4H8.77C8.50478 52.4 8.25043 52.2946 8.06289 52.1071C7.87536 51.9196 7.77 51.6652 7.77 51.4C7.77 51.1348 7.87536 50.8804 8.06289 50.6929C8.25043 50.5054 8.50478 50.4 8.77 50.4ZM8.77 41.01H11.63C11.8952 41.01 12.1496 41.1154 12.3371 41.3029C12.5246 41.4904 12.63 41.7448 12.63 42.01C12.63 42.2752 12.5246 42.5296 12.3371 42.7171C12.1496 42.9046 11.8952 43.01 11.63 43.01H8.77C8.50478 43.01 8.25043 42.9046 8.06289 42.7171C7.87536 42.5296 7.77 42.2752 7.77 42.01C7.77 41.7448 7.87536 41.4904 8.06289 41.3029C8.25043 41.1154 8.50478 41.01 8.77 41.01ZM23.26 36.93V32H46.11V36.9H67.33V38.53V70V70.4H0V39V37L23.26 36.93ZM24.89 33.67V36.93H33.89V33.67H24.89ZM35.5 33.67V36.93H44.5V33.67H35.5ZM65.29 39H51V68.35H65.29V39ZM49 39V68.35H20V39H49ZM18 39H2V47.16H18V39ZM18 68.38V49.17H2V68.35L18 68.38ZM45.71 54.48V65.48H23.71V53.25H45.71V54.48Z" fill="#1B1B1B" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M283.35 68.4102C282.855 68.5664 282.339 68.6473 281.82 68.6502C279.61 68.6502 277.82 66.9302 271.51 54.3102C273.286 53.5935 274.817 52.3769 275.915 50.8078C277.014 49.2387 277.634 47.3846 277.7 45.4702C277.7 40.8502 274.7 36.9702 267.03 36.9702H244.39V38.4902H245.39C245.784 38.4653 246.179 38.5245 246.548 38.664C246.917 38.8034 247.252 39.0198 247.531 39.2989C247.81 39.578 248.027 39.9133 248.166 40.2825C248.306 40.6517 248.365 41.0463 248.34 41.4402V66.0002C248.385 66.4008 248.34 66.8063 248.208 67.1873C248.077 67.5683 247.862 67.9151 247.579 68.2025C247.297 68.4899 246.953 68.7107 246.575 68.8486C246.196 68.9866 245.791 69.0384 245.39 69.0002H244.39V70.4702H263.79V68.9002H262.79C262.39 68.9347 261.986 68.8804 261.609 68.7411C261.232 68.6018 260.891 68.381 260.609 68.0944C260.327 67.8078 260.112 67.4626 259.979 67.0833C259.846 66.704 259.799 66.3 259.84 65.9002V55.7302H259.89L263.43 63.6402C266.08 69.6402 269.91 70.8602 275.43 70.8602C278.1 70.8959 280.763 70.5593 283.34 69.8602V68.4102H283.35ZM261.09 38.8302C262.81 38.8302 265.02 40.0102 265.02 46.4502C265.02 52.2902 262.71 53.8202 261.58 53.8202C260.45 53.8202 259.86 53.1802 259.86 52.2902V38.8302H261.09Z" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M212.6 68.9C211.776 68.8777 210.972 68.6386 210.27 68.2067C209.568 67.7748 208.992 67.1654 208.6 66.44L196.78 48L203.17 42C205.82 39.49 208.17 38.46 210 38.46H210.73V37H197.32V38.52H198.32C199.75 38.52 200.44 39.01 200.44 39.9C200.44 42.15 196.36 45.9 193.56 48.64L189.33 52.64V41.44C189.31 41.0473 189.372 40.6547 189.514 40.2877C189.655 39.9207 189.871 39.5874 190.149 39.3094C190.427 39.0313 190.761 38.8147 191.128 38.6736C191.495 38.5324 191.887 38.4699 192.28 38.49H193.28V37H173.88V38.52H174.88C175.274 38.4951 175.669 38.5543 176.038 38.6937C176.407 38.8332 176.742 39.0496 177.021 39.3287C177.3 39.6078 177.517 39.943 177.656 40.3123C177.796 40.6815 177.855 41.0761 177.83 41.47V66C177.871 66.3998 177.824 66.8038 177.691 67.1831C177.558 67.5624 177.343 67.9076 177.061 68.1942C176.779 68.4808 176.438 68.7016 176.061 68.8409C175.684 68.9802 175.28 69.0345 174.88 69H173.88V70.47H193.28V68.9H192.28C191.88 68.9345 191.476 68.8802 191.099 68.7409C190.722 68.6016 190.381 68.3808 190.099 68.0942C189.817 67.8076 189.602 67.4624 189.469 67.0831C189.336 66.7038 189.289 66.2998 189.33 65.9V55.29H189.43L198.22 70.37H240.7L243.64 58.37H242C238.66 64.7 234.29 68.54 230 68.54C228 68.54 227.2 67.26 227.2 65.54V54.36H231.76C232.158 54.3343 232.558 54.3946 232.931 54.537C233.304 54.6794 233.641 54.9004 233.921 55.1851C234.201 55.4697 234.417 55.8113 234.553 56.1866C234.689 56.5619 234.742 56.9621 234.71 57.36V58.36H236.43V48.56H234.71V49.56C234.742 49.9579 234.689 50.3581 234.553 50.7334C234.417 51.1087 234.201 51.4503 233.921 51.735C233.641 52.0196 233.304 52.2406 232.931 52.383C232.558 52.5254 232.158 52.5857 231.76 52.56H227.2V38.83H230C234.27 38.83 237.46 41.83 240.51 47.53H242.18L239.74 37H211.74V38.52H212.74C213.131 38.5075 213.52 38.5753 213.884 38.7191C214.247 38.8629 214.577 39.0797 214.854 39.3562C215.13 39.6327 215.347 39.9629 215.491 40.3265C215.635 40.69 215.703 41.0792 215.69 41.47V66C215.714 66.396 215.655 66.7927 215.516 67.1643C215.377 67.5359 215.161 67.8741 214.883 68.157C214.605 68.4399 214.27 68.6611 213.901 68.8064C213.532 68.9516 213.136 69.0176 212.74 69L212.6 68.9Z" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M171.46 60.06H170C168.23 65.85 165.43 69.34 162.29 69.34C159.49 69.34 155.07 66.34 155.07 53.87C155.07 41.4 158.56 38.05 162.29 38.05C165.43 38.05 167.99 41.49 169.76 47.28H171.23V38.19C169.2 37 164.82 36 161.14 36C150.33 36 143.21 44 143.21 53.89C143.21 63.78 150 71.36 161.14 71.36C164.82 71.36 169.44 70.36 171.46 69.15V60.06Z" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M138.06 70.37L141.01 58.37H139.34C136 64.7 131.62 68.54 127.34 68.54C125.34 68.54 124.54 67.26 124.54 65.54V54.36H129.11C129.508 54.3343 129.908 54.3946 130.281 54.537C130.654 54.6794 130.992 54.9004 131.271 55.1851C131.551 55.4697 131.767 55.8113 131.903 56.1866C132.039 56.5619 132.092 56.9621 132.06 57.36V58.36H133.78V48.56H132.06V49.56C132.092 49.9579 132.039 50.3581 131.903 50.7334C131.767 51.1087 131.551 51.4503 131.271 51.735C130.992 52.0196 130.654 52.2406 130.281 52.383C129.908 52.5254 129.508 52.5857 129.11 52.56H124.54V38.83H127.34C131.61 38.83 134.81 41.83 137.85 47.53H139.52L137.08 37H109.08V38.52H110.08C110.466 38.5118 110.849 38.5818 111.207 38.7256C111.565 38.8695 111.89 39.0842 112.163 39.357C112.436 39.6298 112.651 39.955 112.794 40.313C112.938 40.6709 113.008 41.0543 113 41.44V66C113.024 66.3951 112.965 66.7909 112.827 67.1618C112.688 67.5327 112.474 67.8704 112.197 68.1531C111.919 68.4359 111.586 68.6573 111.218 68.8032C110.85 68.9491 110.456 69.0161 110.06 69H109.06V70.47L138.06 70.37Z" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M94.86 70.3702C103.8 70.3702 110.29 67.5202 110.29 60.7002C110.29 56.8102 107.29 53.6202 101.74 52.5902V52.4902C105.48 51.0202 108.08 48.6602 108.08 44.3402C108.08 40.2602 105.08 36.9702 96.08 36.9702H76.88V38.4902H77.88C78.2806 38.4453 78.6861 38.4902 79.0671 38.6218C79.4481 38.7535 79.7949 38.9684 80.0823 39.251C80.3697 39.5336 80.5904 39.8768 80.7284 40.2555C80.8664 40.6342 80.9182 41.039 80.88 41.4402V66.0002C80.9263 66.4054 80.8805 66.8158 80.7461 67.2008C80.6117 67.5859 80.3921 67.9356 80.1038 68.224C79.8154 68.5123 79.4657 68.7319 79.0806 68.8663C78.6956 69.0007 78.2852 69.0465 77.88 69.0002H76.88V70.4702L94.86 70.3702ZM93.93 54.2102C95.65 54.2102 98.99 55.0902 98.99 61.3802C98.99 67.3802 96.04 68.7502 94.52 68.7502C94.2257 68.7579 93.9329 68.704 93.6607 68.5918C93.3885 68.4796 93.1427 68.3117 92.9393 68.0988C92.7358 67.8859 92.5792 67.6329 92.4794 67.3558C92.3796 67.0788 92.339 66.7839 92.36 66.4902V54.2102H93.93ZM92.36 52.3402V38.8302H92.85C95.3 38.8302 96.78 41.4402 96.78 45.5602C96.78 51.4602 93.78 52.3402 92.78 52.3402H92.36Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2054_23">
                                                    <rect width="283.35" height="94.69" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Российский производитель кухонь
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за август – сентябрь 2024 года</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    10000
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    по коду
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    10000
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    94
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    MQL
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item last"
                                            >
                                                <div className="sw_rev_item_right_list_item-title"></div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    6%
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    конверсии в продажу
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title">
                                        <svg width="317" height="40" viewBox="0 0 317 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M127.559 22.465C128.432 18.7148 131.24 17.0818 134.467 17.0818C137.693 17.0818 140.856 18.7032 141.281 22.465H127.559ZM145.608 34.3162L146.069 29.1547C138.485 33.3131 129.12 33.8963 127.699 26.6177H146.849V24.3139C146.616 16.4752 140.635 12.6025 134.467 12.6025C128.159 12.6025 121.991 16.6152 121.991 24.7746C121.991 37.1275 135.247 39.6588 145.608 34.3162Z" fill="white" />
                                            <path d="M99.7009 22.465C100.575 18.7148 103.382 17.0818 106.609 17.0818C109.829 17.0818 112.998 18.7032 113.423 22.465H99.7009ZM117.745 34.3162L118.205 29.1547C110.622 33.3131 101.256 33.8963 99.8348 26.6177H118.985V24.3139C118.752 16.4752 112.771 12.6025 106.603 12.6025C100.295 12.6025 94.127 16.6152 94.127 24.7746C94.127 37.1275 107.389 39.6588 117.745 34.3162Z" fill="white" />
                                            <path d="M156.237 3.01465H150.942V36.2997H156.237V26.064C158.264 26.064 159.83 26.064 161.438 27.5396C163.692 29.8433 165.352 32.7945 166.872 36.2997H172.946C171.474 31.5989 166.825 24.2677 161.898 24.2677V23.5736C165.952 23.5736 170.92 17.2106 172.254 13.2504H166.686C165.398 16.0149 163.692 18.5519 161.345 20.6282C159.778 22.1038 157.891 22.0572 156.237 22.0572V3.01465Z" fill="white" />
                                            <path d="M183.047 18.2718V9.69826H190.874C195.062 9.69826 196.676 11.8212 196.676 13.985C196.676 16.108 195.062 18.2718 190.874 18.2718H183.047ZM183.047 31.4529V22.8793H192.163C196.35 22.8793 197.963 25.0023 197.963 27.166C197.963 29.289 196.262 31.4529 192.069 31.4529H183.047ZM192.023 4.85742H177.52V36.2937H193.402C200.17 36.2937 203.578 32.4676 203.578 27.8602C203.578 23.8008 200.63 20.9022 195.616 20.5756V19.8408C200.403 18.9658 202.198 15.968 202.198 12.8361C202.198 8.59011 198.883 4.85742 192.023 4.85742Z" fill="white" />
                                            <path d="M207.647 13.2442V36.2936H212.942V20.8087C214.923 18.8258 217.496 18.1376 221.69 18.1376H223.811L223.396 12.8359H221.696C218.195 12.8359 214.882 14.3582 213.595 17.5369H212.947V13.2442H207.647Z" fill="white" />
                                            <path d="M230.264 24.7684C230.264 19.7001 233.135 17.1163 237.002 17.1163C240.131 17.1163 242.315 18.0845 244.249 20.0674V29.4692C242.315 31.4523 240.131 32.4203 237.002 32.4203C233.142 32.4203 230.264 29.8425 230.264 24.7684ZM244.254 13.2437V16.6089H243.654C241.58 13.8911 239.17 12.5088 235.622 12.5088C228.394 12.5088 224.784 18.3644 224.784 24.7684C224.784 31.1722 228.394 37.0279 235.622 37.0279C239.17 37.0279 241.58 35.6457 243.654 32.9278H244.254V36.2931H249.549V13.2437H244.254Z" fill="white" />
                                            <path d="M255.922 36.2936H261.218V13.2442H255.922V36.2936ZM258.596 10.2988C260.803 10.2988 262.278 8.82326 262.278 6.61279C262.278 4.40235 260.803 2.92676 258.596 2.92676C256.389 2.92676 254.915 4.40235 254.915 6.61279C254.91 8.82326 256.382 10.2988 258.596 10.2988Z" fill="white" />
                                            <path d="M272.886 13.2437H267.592V36.2931H272.886V20.0674C274.82 18.1777 276.957 17.1163 279.531 17.1163C282.34 17.1163 284.983 18.6852 284.983 23.386V36.2931H290.278V22.1905C290.278 16.2415 287.493 12.5088 281.745 12.5088C278.617 12.5088 275.466 13.8444 273.394 16.7956H272.886V13.2437Z" fill="white" />
                                            <path d="M294.722 19.9353C294.722 24.0354 298.543 25.651 301.489 26.2983L308.257 27.7273C310.464 28.188 311.478 28.8356 311.478 29.9378C311.478 31.6001 309.178 32.3815 305.817 32.3815C301.858 32.3815 297.302 30.8593 294.768 29.477L295.228 34.6853C298.176 36.2075 301.997 37.0357 305.537 37.0357C312.119 37.0357 317 34.8719 317 29.7044C317 25.511 313.5 23.9422 309.404 23.0673L303.236 21.7784C301.304 21.3643 300.244 20.7169 300.244 19.6146C300.244 18.0457 302.316 17.2174 305.631 17.2174C309.358 17.2174 313.365 18.5998 315.48 19.7545L315.02 14.5463C312.486 13.2573 309.219 12.5166 305.905 12.5166C299.882 12.5108 294.722 14.6337 294.722 19.9353Z" fill="white" />
                                            <path d="M74.8524 18.9308V23.9874H84.6723V29.6506C82.0223 31.1845 79.2848 31.8843 76.6813 31.8843C70.4552 31.8843 64.7938 27.8368 64.7938 20.6279C64.7938 13.4192 70.461 9.37159 76.6813 9.37159C80.6769 9.37159 84.9286 10.9871 88.7843 14.2416L88.2135 7.80851C84.486 5.36476 80.3856 4.20996 76.0581 4.20996C67.4031 4.20996 58.9346 10.019 58.9346 20.6221C58.9346 31.2254 67.4031 37.0343 76.0581 37.0343C80.3856 37.0343 84.8995 36.0662 90.0075 32.2868V18.9308H74.8524Z" fill="white" />
                                            <path d="M17.7388 3.72947L17.3653 0.345728C12.3538 -1.18599 7.00976 2.61709 3.76012 6.92687C1.90485 9.43119 0.370469 12.2092 1.95153 14.7136C-0.65051 17.1247 -0.65051 22.4536 1.95153 24.9113C0.370469 27.4157 1.90485 30.1938 3.76012 32.698C6.92224 36.868 10.9595 39.6055 15.1367 39.6055C19.454 39.6055 22.9371 36.0352 22.9371 31.6789V28.3884C22.9371 26.1635 22.1028 24.9113 20.475 23.1991L18.013 20.5551C18.0597 20.3222 18.0597 20.1357 18.0597 19.9086C18.0597 18.1031 16.7586 16.8044 14.95 16.8044C13.2348 16.8044 11.8871 18.1031 11.8871 19.9086C11.8871 21.5335 13.2348 22.873 14.95 22.873C15.1834 22.873 15.3701 22.8264 15.5043 22.8264L18.0597 25.517C19.034 26.5829 19.5007 27.3691 19.5007 28.6679V31.6789C19.5007 35.4353 16.4378 37.0079 13.0481 35.7557C10.7728 34.9229 8.45078 33.2049 6.31549 30.4268C4.41354 27.7827 4.82777 26.5363 5.89543 25.7908C6.82305 25.2375 7.79737 25.3249 9.47176 27.4157C9.38424 27.6895 9.33758 28.0156 9.33758 28.3418C9.33758 30.054 10.7319 31.446 12.4005 31.446C14.0691 31.446 15.4168 30.054 15.4168 28.3418C15.4168 26.6761 14.0691 25.2841 12.4005 25.2841H12.1672C10.1719 22.7333 7.75651 20.9744 4.41354 22.7333C3.20587 21.6674 3.39257 17.8644 4.41354 16.8917C7.75651 18.6506 10.1719 16.8917 12.1672 14.3408H12.4005C14.0691 14.3408 15.4168 12.9489 15.4168 11.2832C15.4168 9.57097 14.0691 8.17902 12.4005 8.17902C10.7319 8.17902 9.33758 9.57097 9.33758 11.2832C9.33758 11.6094 9.38424 11.9297 9.47759 12.2092C7.80902 14.2942 6.82889 14.3874 5.90126 13.8341C4.8336 13.0945 4.41354 11.8423 6.32132 9.19822C8.96418 5.76788 13.5148 2.01723 17.7388 3.72947ZM23.1646 35.8955L23.538 39.2793C28.5495 40.811 33.8935 37.0079 37.1433 32.698C38.9984 30.1938 40.5328 27.4157 38.9517 24.9113C41.5539 22.5002 41.5539 17.1713 38.9517 14.7136C40.5328 12.2092 38.9984 9.43119 37.1433 6.92687C33.9811 2.75687 29.9438 0.0254076 25.7665 0.0254076C21.4494 0.0254076 17.9663 3.59553 17.9663 7.95189V11.2424C17.9663 13.4672 18.8005 14.7194 20.4283 16.4317L22.8904 19.0758C22.8437 19.3087 22.8437 19.4951 22.8437 19.7223C22.8437 21.5277 24.1447 22.8264 25.9533 22.8264C27.6685 22.8264 29.0161 21.5277 29.0161 19.7223C29.0161 18.0973 27.6685 16.7578 25.9533 16.7578C25.7198 16.7578 25.5332 16.8044 25.3991 16.8044L22.8437 14.1137C21.8693 13.0479 21.4027 12.2617 21.4027 10.9629V7.95189C21.4027 4.1954 24.4656 2.62292 27.8552 3.87507C30.1306 4.70791 32.4525 6.42599 34.5879 9.20404C36.4899 11.8481 36.0755 13.0945 35.008 13.84C34.0803 14.3932 33.106 14.3059 31.4315 12.2151C31.5249 11.9355 31.5716 11.6152 31.5716 11.289C31.5716 9.57679 30.1773 8.18485 28.5086 8.18485C26.8401 8.18485 25.4923 9.57679 25.4923 11.289C25.4923 12.9547 26.8401 14.3466 28.5086 14.3466H28.7421C30.7373 16.8976 33.1527 18.6564 36.4957 16.8976C37.7033 17.9634 37.5165 21.7664 36.4957 22.7391C33.1527 20.9802 30.7373 22.7391 28.7421 25.2899H28.5086C26.8401 25.2899 25.4923 26.6819 25.4923 28.3475C25.4923 30.0598 26.8401 31.4518 28.5086 31.4518C30.1773 31.4518 31.5716 30.0598 31.5716 28.3475C31.5716 28.0214 31.5249 27.701 31.4315 27.4215C33.1002 25.3365 34.0803 25.2434 35.008 25.7967C36.0755 26.5363 36.4957 27.7885 34.5879 30.4325C31.9392 33.8572 27.3885 37.6078 23.1646 35.8955Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Образовательная платформа
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за июль – сентябрь 2023 года</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    13456
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    по коду
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    12000
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    380
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    MQL
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item last"
                                            >
                                                <div className="sw_rev_item_right_list_item-title"></div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    9-15%
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    конверсии в продажу
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title big">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="165" height="40" viewBox="0 0 165 40" fill="none">
                                            <mask id="mask0_737_119" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                                <path d="M39.9086 0H0V40H39.9086V0Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_737_119)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M29.0743 38.9175C35.0568 38.9175 39.9076 33.7823 39.9076 27.4465V15.9756C38.4419 15.9756 36.1194 15.9756 33.8179 15.9756C32.1043 15.9756 30.4035 15.9756 29.0743 15.9756C23.0916 15.9756 18.2408 21.1108 18.2408 27.4465C18.2408 33.7823 23.0916 38.9175 29.0743 38.9175ZM29.0743 33.2609C32.0665 33.2609 34.4919 30.7279 34.4919 27.6044C34.4919 24.4809 32.0665 21.9479 29.0743 21.9479C26.0819 21.9479 23.6565 24.4809 23.6565 27.6044C23.6565 30.7279 26.0819 33.2609 29.0743 33.2609Z" fill="white" />
                                                <path d="M19.2417 11.4099C19.2417 12.4245 18.4416 13.2486 17.4568 13.2486C16.4719 13.2486 15.6719 12.4245 15.6719 11.4099C15.6719 10.3955 16.4719 9.57129 17.4568 9.57129C18.4416 9.57129 19.2417 10.3955 19.2417 11.4099Z" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.6774 27.2733C16.6774 22.0387 19.5186 17.5351 23.5967 15.5321V3.4252L21.4442 2.30472C20.2598 1.68824 18.2649 0.911687 17.0092 0.580733C14.0652 -0.197981 9.15138 -0.195818 6.32281 0.585059C5.22456 0.887893 3.35355 1.59955 2.1629 2.16628L0 3.19808L0.00419981 13.7086C0.00839961 25.5429 0.151193 26.7001 2.0474 30.4422C4.19351 34.6733 8.50041 38.1148 13.0383 39.2201C15.1403 39.7327 25.434 40.2714 25.9065 39.8452C20.6316 38.608 16.6753 33.4512 16.6753 27.2733H16.6774ZM11.7784 19.9772C8.7335 20.0443 5.75163 18.9411 3.31365 16.6633L2.11671 15.545V5.29629H3.25065C3.87433 5.30061 5.07127 5.63156 5.90912 6.03606C8.75659 7.4053 10.972 10.0832 11.4151 13.9595L11.7763 16.1702L12.1375 13.9595C12.5805 10.0832 14.7959 7.4053 17.6434 6.03606C18.4812 5.63156 19.6782 5.30061 20.3018 5.29845H21.4358V10.4206V15.545L20.2389 16.6633C17.8008 18.9411 14.819 20.0443 11.7742 19.9772H11.7784Z" fill="white" />
                                                <path d="M7.88734 11.4099C7.88734 12.4245 7.08727 13.2486 6.10242 13.2486C5.11757 13.2486 4.3175 12.4245 4.3175 11.4099C4.3175 10.3955 5.11757 9.57129 6.10242 9.57129C7.08727 9.57129 7.88734 10.3955 7.88734 11.4099Z" fill="white" />
                                            </g>
                                            <path d="M49.7817 30.6192C49.7817 30.6192 49.7817 23.7458 49.7817 9.99902C49.7817 9.99902 51.7224 9.99902 55.6039 9.99902C57.034 9.99902 58.1664 10.1217 59.0014 10.3671C59.8363 10.6033 60.5868 11.0258 61.253 11.6345C62.5764 12.852 63.2382 14.5102 63.2382 16.6089C63.2382 18.7168 62.5098 20.3705 61.0531 21.5697C60.6357 21.915 60.2049 22.1922 59.7608 22.4011C59.3255 22.601 58.7305 22.8009 57.9755 23.0008L63.4247 30.6192H58.8148C58.8148 30.6192 57.0518 27.9843 53.5255 22.7146C53.5255 22.7146 53.5255 25.3494 53.5255 30.6192C53.5255 30.6192 52.2776 30.6192 49.7817 30.6192ZM53.5255 19.8389C53.5255 19.8389 54.1339 19.8389 55.3508 19.8389C56.7986 19.8389 57.8467 19.5937 58.495 19.1029C59.1435 18.6033 59.4677 17.8083 59.4677 16.718C59.4677 15.6549 59.1257 14.8554 58.4418 14.3193C57.8822 13.8741 56.7986 13.6515 55.1909 13.6515H53.5255C53.5255 13.6515 53.5255 15.714 53.5255 19.8389Z" fill="white" />
                                            <path d="M79.972 24.5413C79.972 24.5413 76.0684 24.5413 68.261 24.5413C68.483 25.4771 68.967 26.2176 69.7132 26.7628C70.4592 27.3079 71.3697 27.5804 72.4444 27.5804C73.1905 27.5804 73.8123 27.4669 74.3097 27.2398C74.8071 27.0035 75.2912 26.6038 75.7619 26.0404H79.7188C79.5057 26.74 79.1061 27.4578 78.5197 28.1937C76.9565 30.0564 74.9581 30.9876 72.5243 30.9876C71.3875 30.9876 70.3127 30.7786 69.3001 30.3607C68.2876 29.9427 67.4172 29.3795 66.6888 28.6707C65.9693 27.953 65.3964 27.0989 64.9702 26.1086C64.5438 25.1092 64.3306 24.0552 64.3306 22.9467C64.3306 21.4567 64.6814 20.0892 65.3831 18.8446C66.0937 17.5907 67.0574 16.6049 68.2743 15.8872C69.5 15.1602 70.8412 14.7969 72.2978 14.7969C73.7812 14.7969 75.1179 15.1558 76.3082 15.8734C77.4984 16.5822 78.4265 17.5725 79.0927 18.8446C79.7678 20.1074 80.1052 21.5294 80.1052 23.1103C80.1052 23.6191 80.0609 24.0961 79.972 24.5413ZM68.1544 21.2704H76.5346C76.3037 20.2801 75.8285 19.5214 75.1091 18.9945C74.3896 18.4675 73.4703 18.204 72.3512 18.204C71.2675 18.204 70.366 18.4675 69.6465 18.9945C68.936 19.5123 68.4386 20.271 68.1544 21.2704Z" fill="white" />
                                            <path d="M82.3435 30.6192C82.3435 30.6192 82.3435 23.7458 82.3435 9.99902C82.3435 9.99902 83.5514 9.99902 85.9674 9.99902C85.9674 9.99902 85.9674 12.1933 85.9674 16.5817C86.678 15.8639 87.3885 15.3551 88.099 15.0553C88.8185 14.7464 89.6712 14.5919 90.6571 14.5919C92.096 14.5919 93.3973 14.9462 94.5608 15.6549C95.7241 16.3637 96.6352 17.3449 97.292 18.5987C97.9498 19.8435 98.2782 21.2382 98.2782 22.7827C98.2782 24.8815 97.6871 26.7123 96.5057 28.2751C95.1204 30.0831 93.2551 30.9871 90.9103 30.9871C89.7911 30.9871 88.8319 30.81 88.0325 30.4556C87.233 30.1013 86.4425 29.4971 85.661 28.643V30.6192H82.3435ZM90.0843 17.999C88.823 17.999 87.7838 18.4534 86.9666 19.3619C86.1584 20.2705 85.7542 21.429 85.7542 22.8373C85.7542 24.2274 86.1717 25.3676 87.0066 26.258C87.8415 27.1394 88.9118 27.58 90.2174 27.58C91.5143 27.58 92.5712 27.1438 93.3884 26.2717C94.2056 25.3903 94.6141 24.2455 94.6141 22.8373C94.6141 21.4108 94.1922 20.2478 93.3484 19.3483C92.5135 18.4488 91.4255 17.999 90.0843 17.999Z" fill="white" />
                                            <path d="M107.911 14.7969C109.35 14.7969 110.682 15.1602 111.907 15.8872C113.134 16.614 114.102 17.6044 114.812 18.8582C115.523 20.1029 115.878 21.4567 115.878 22.9195C115.878 24.3732 115.518 25.7225 114.799 26.9672C114.088 28.2029 113.116 29.1841 111.881 29.9109C110.646 30.6287 109.305 30.9876 107.858 30.9876C106.4 30.9876 105.051 30.6287 103.807 29.9109C102.573 29.1841 101.596 28.2029 100.876 26.9672C100.157 25.7225 99.7967 24.3732 99.7967 22.9195C99.7967 21.811 100.006 20.7571 100.423 19.7577C100.85 18.7491 101.423 17.886 102.141 17.1682C102.871 16.4413 103.736 15.8644 104.74 15.4374C105.744 15.0103 106.8 14.7969 107.911 14.7969ZM107.765 18.204C106.592 18.204 105.579 18.6674 104.727 19.5941C103.882 20.5117 103.461 21.6112 103.461 22.8922C103.461 24.1824 103.887 25.2863 104.74 26.2039C105.592 27.1216 106.618 27.5804 107.818 27.5804C109.025 27.5804 110.06 27.1262 110.922 26.2176C111.784 25.3 112.214 24.2005 112.214 22.9195C112.214 21.593 111.784 20.4755 110.922 19.5668C110.06 18.6583 109.008 18.204 107.765 18.204Z" fill="white" />
                                            <path d="M118.516 30.6192C118.516 30.6192 118.516 26.5897 118.516 18.5306C118.516 18.5306 117.926 18.5306 116.745 18.5306C116.745 18.5306 116.745 17.4039 116.745 15.1507C116.745 15.1507 117.335 15.1507 118.516 15.1507C118.516 15.1507 118.516 13.4335 118.516 9.99902C118.516 9.99902 119.724 9.99902 122.14 9.99902C122.14 9.99902 122.14 11.7163 122.14 15.1507C122.14 15.1507 122.869 15.1507 124.325 15.1507C124.325 15.1507 124.325 16.2773 124.325 18.5306C124.325 18.5306 123.597 18.5306 122.14 18.5306C122.14 18.5306 122.14 22.5601 122.14 30.6192C122.14 30.6192 120.932 30.6192 118.516 30.6192Z" fill="white" />
                                            <path d="M126.123 30.6192C126.123 30.6192 126.123 25.463 126.123 15.1507C126.123 15.1507 127.331 15.1507 129.747 15.1507C129.747 15.1507 129.747 20.3069 129.747 30.6192C129.747 30.6192 128.539 30.6192 126.123 30.6192ZM126.123 13.488C126.123 13.488 126.123 12.325 126.123 9.99902C126.123 9.99902 127.331 9.99902 129.747 9.99902C129.747 9.99902 129.747 11.1621 129.747 13.488C129.747 13.488 128.539 13.488 126.123 13.488Z" fill="white" />
                                            <path d="M143.484 25.5362C143.484 25.5362 144.847 25.5362 147.573 25.5362C146.943 27.2716 145.975 28.6163 144.669 29.5702C143.372 30.5152 141.841 30.9876 140.073 30.9876C138.972 30.9876 137.919 30.7741 136.915 30.3471C135.921 29.9201 135.063 29.3476 134.344 28.6299C133.624 27.9121 133.051 27.0534 132.625 26.054C132.198 25.0546 131.985 24.0007 131.985 22.8922C131.985 21.4022 132.336 20.0393 133.038 18.8036C133.74 17.5589 134.699 16.5822 135.916 15.8734C137.142 15.1558 138.487 14.7969 139.953 14.7969C141.036 14.7969 142.066 14.9967 143.044 15.3965C144.029 15.7872 144.892 16.3505 145.629 17.0864C146.108 17.568 146.485 18.0405 146.761 18.5039C147.045 18.9581 147.316 19.5623 147.573 20.3164H143.484C142.773 18.9081 141.596 18.204 139.953 18.204C138.692 18.204 137.657 18.6401 136.849 19.5123C136.049 20.3754 135.649 21.4931 135.649 22.865C135.649 24.2187 136.067 25.3454 136.902 26.2449C137.745 27.1353 138.794 27.5804 140.046 27.5804C140.793 27.5804 141.436 27.4169 141.978 27.0898C142.529 26.7628 143.031 26.2449 143.484 25.5362Z" fill="white" />
                                            <path d="M165 15.1512C165 15.1512 165 20.3073 165 30.6197C165 30.6197 163.895 30.6197 161.684 30.6197C161.684 30.6197 161.684 29.9519 161.684 28.6163C160.954 29.4612 160.199 30.07 159.418 30.4425C158.646 30.8059 157.726 30.9876 156.66 30.9876C155.204 30.9876 153.894 30.6469 152.73 29.9655C151.576 29.275 150.669 28.3164 150.012 27.0898C149.363 25.8633 149.04 24.4823 149.04 22.9467C149.04 21.3931 149.368 19.9985 150.025 18.7627C150.683 17.518 151.598 16.5458 152.77 15.8462C153.942 15.1466 155.265 14.7969 156.74 14.7969C157.833 14.7969 158.774 14.9921 159.564 15.3828C160.356 15.7645 161.061 16.3778 161.684 17.2227V15.1512H165ZM157.06 18.204C155.798 18.204 154.755 18.6583 153.929 19.5668C153.112 20.4755 152.704 21.6293 152.704 23.0285C152.704 24.3823 153.116 25.4817 153.942 26.3266C154.777 27.1625 155.857 27.5804 157.18 27.5804C158.494 27.5804 159.551 27.1535 160.351 26.2994C161.159 25.4453 161.564 24.3278 161.564 22.9467C161.564 21.5475 161.141 20.4073 160.297 19.5259C159.463 18.6446 158.383 18.204 157.06 18.204Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Детская онлайн-школа IT-профессий
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за май 2024</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    4646
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    по коду
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    4590
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    18
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    MQL
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-6">
                                            <div className="sw_rev_item_right_list_item inline"
                                            >
                                                <div className="sw_rev_item_right_list_item_it">
                                                    <div className="sw_rev_item_right_list_item-title"></div>
                                                    <div className="sw_rev_item_right_list_item-num">
                                                        1,76%
                                                    </div>
                                                    <div className="sw_rev_item_right_list_item-text">
                                                        конверсии в лид
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-6">
                                            <div className="sw_rev_item_right_list_item inline"
                                            >
                                                <div className="sw_rev_item_right_list_item_it">
                                                    <div className="sw_rev_item_right_list_item-title"></div>
                                                    <div className="sw_rev_item_right_list_item-num">
                                                        22%
                                                    </div>
                                                    <div className="sw_rev_item_right_list_item-text">
                                                        конверсии в продажу
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="480" height="40" viewBox="0 0 480 40" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.7542 14.9141L25.1727 15.9429C35.2188 17.0287 40.4132 21.0287 40.4132 27.7712C40.4132 35.5999 33.221 39.9999 20.0923 39.9999C6.62152 39.9999 0 35.5999 0 26.6858H9.19C9.19 30.5716 13.1857 32.7429 20.3208 32.7429C27.5131 32.7429 30.7095 31.4283 30.7095 28.057C30.7095 25.5429 28.4262 24.4571 24.3165 23.9999L15.2976 23.0287C5.87942 21.9999 1.14167 18.1712 1.14167 11.6C1.14167 4.57162 8.73341 0 19.5217 0C31.4516 0 38.5294 4.57162 38.5294 12.1141H29.5679C29.1683 8.79997 25.9148 7.08579 19.6927 7.08579C13.4712 7.08579 10.6172 8.57161 10.6172 11.3141C10.6172 13.7141 12.4436 14.5715 15.7542 14.9141ZM282.264 32.1142C274.559 32.1142 270.049 27.6571 270.049 20C270.049 12.3429 274.559 7.88585 282.264 7.88585C288.258 7.88585 291.798 10.2284 293.053 14.8572H302.871C301.9 6.00004 293.509 6.21828e-05 282.264 6.21828e-05C268.851 6.21828e-05 260.118 7.88585 260.118 20C260.118 32.1712 268.793 40 282.264 40C293.965 40 302.128 33.7712 302.985 24.2283H293.167C292.596 29.1999 288.6 32.1142 282.264 32.1142ZM228.555 23.5999L235.572 5.20007H235.858L242.843 23.5999H228.555ZM228.266 0.971347L213.767 39.0283H222.672L225.832 30.7428H245.555L248.701 39.0283H258.576L244.02 0.971347H228.266ZM85.9636 0.97141H75.9174L61.1336 16.0001H56.6813V0.97141H47.6623V39.0283H56.6813V23.2001H61.1336L75.746 39.0283H87.4478L68.5872 18.648L85.9636 0.97141ZM111.421 0.97141H120.44V31.7142H140.989V39.0283H111.421V0.97141ZM156.059 0.97141H147.04V39.0283H176.607V31.7142H156.059V0.97141ZM191.677 8.28566H214.396V0.971505H182.658V39.0285H191.677V25.0285H210.513V17.7143H191.677V8.28566ZM101.718 39.0285H92.6992V0.971506H101.718V39.0285ZM358.125 0.971508H381.136V9.7144H358.125V0.971508ZM358.125 9.7144V30.2855H348.592V9.71437L358.125 9.7144ZM381.136 9.7144L390.669 9.71437V30.2855H381.136V9.7144ZM420.293 19.4285H408.021V8.2856H420.293C424.518 8.2856 427.143 10.4572 427.143 13.8856C427.143 17.3143 424.518 19.4285 420.293 19.4285ZM436.504 13.8856C436.504 5.94306 430.339 0.971442 420.293 0.971442H398.945V39.0285H408.021V26.7426H416.923L427.143 39.0285H438.159L426.519 25.0331C432.824 23.515 436.504 19.5365 436.504 13.8856ZM470.353 0.97141L459.565 17.8856L448.777 0.97141H438.274L454.6 26.0001V39.0283H463.618V26.0001L480 0.97141H470.353ZM320.28 8.28566H306.011V0.971505H343.626V8.28566H329.298V39.0285H320.28V8.28566ZM381.136 39.0285H358.125V30.2855H381.136V39.0285Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Школа онлайн-профессий
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за май 2024 - н.в.</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    52569
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    look-a-like
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    52569
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    1138
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    MQL
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item last"
                                            >
                                                <div className="sw_rev_item_right_list_item-title"></div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    5%
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    конверсии в продажу
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title big">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="48" viewBox="0 0 250 48" fill="none">
                                            <path d="M16.2956 10.3391V28.5243C16.2956 29.2111 15.9652 29.4034 15.4147 29.4034H12.4144C11.8638 29.4034 11.5335 29.2111 11.5335 28.5243V13.6904H4.76205V28.5243C4.76205 29.2111 4.45926 29.4034 3.88121 29.4034H0.880844C0.330316 29.4034 0 29.2111 0 28.5243V10.3391C0 9.65227 0.330316 9.45996 0.880844 9.45996H15.4422C15.9652 9.45996 16.2956 9.65227 16.2956 10.3391Z" fill="white" />
                                            <path d="M36.4723 16.4923C36.4723 20.7227 33.6922 23.4973 28.4897 23.4973H25.5719V28.5243C25.5719 29.2111 25.2416 29.4034 24.6911 29.4034H21.6907C21.1402 29.4034 20.8098 29.2111 20.8098 28.5243V10.339C20.8098 9.78959 21.0025 9.45996 21.6907 9.45996H28.5172C33.7472 9.45996 36.4723 12.3168 36.4723 16.4923ZM31.8754 16.5747C31.8754 15.0089 30.8569 13.7179 28.4622 13.7179H25.5719V19.3767H28.4897C30.8569 19.4042 31.8754 18.0856 31.8754 16.5747Z" fill="white" />
                                            <path d="M54.9701 29.4034H51.777C51.1164 29.4034 50.8686 29.2111 50.6209 28.4968L49.7676 26.1069H42.3355L41.4822 28.4968C41.2344 29.2385 40.9867 29.4034 40.3261 29.4034H37.133C36.4723 29.4034 36.4723 28.9089 36.61 28.5518L43.3539 10.3939C43.6017 9.76213 43.932 9.45996 44.5927 9.45996H47.5379C48.1986 9.45996 48.5014 9.76213 48.7766 10.3939L55.4931 28.5518C55.6307 28.9089 55.6307 29.4034 54.9701 29.4034ZM48.3362 21.849L46.0515 15.1463L43.7668 21.849H48.3362Z" fill="white" />
                                            <path d="M62.9527 13.5797V28.5235C62.9527 29.2103 62.6224 29.4025 62.0719 29.4025H59.0715C58.521 29.4025 58.1907 29.2103 58.1907 28.5235V10.3107C58.1907 9.62395 58.521 9.43164 59.0715 9.43164H70.3574C71.0454 9.43164 71.2383 9.76127 71.2383 10.3107V12.7006C71.2383 13.25 71.0454 13.5797 70.3574 13.5797H62.9527Z" fill="white" />
                                            <path d="M93.3968 10.3107V28.5235C93.3968 29.2103 93.0663 29.4025 92.5159 29.4025H89.598C89.0476 29.4025 88.7171 29.2103 88.7171 28.5235V18.2496L85.6893 23.5514C85.5517 23.7986 85.2765 24.1832 84.8084 24.1832H83.2949C82.8544 24.1832 82.6062 23.7986 82.4416 23.5514L79.3585 18.2496V28.5235C79.3585 29.2103 79.028 29.4025 78.4776 29.4025H75.4774C74.9264 29.4025 74.5966 29.2103 74.5966 28.5235V10.3107C74.5966 9.76127 74.7888 9.43164 75.4774 9.43164H78.4776C79.5237 9.43164 79.6337 10.091 79.8812 10.4755L84.0381 17.9474L88.2221 10.4755C88.4419 10.1184 88.5795 9.43164 89.598 9.43164H92.5159C93.2039 9.43164 93.3968 9.76127 93.3968 10.3107Z" fill="white" />
                                            <path d="M114.565 29.4034H111.372C110.711 29.4034 110.464 29.2111 110.216 28.4968L109.362 26.1069H101.93L101.077 28.4968C100.829 29.2385 100.581 29.4034 99.9211 29.4034H96.7281C96.0671 29.4034 96.0671 28.9089 96.2047 28.5518L102.949 10.3939C103.196 9.76213 103.527 9.45996 104.187 9.45996H107.105C107.766 9.45996 108.068 9.76213 108.344 10.3939L115.06 28.5518C115.225 28.9089 115.225 29.4034 114.565 29.4034ZM107.931 21.849L105.646 15.1463L103.362 21.849H107.931Z" fill="white" />
                                            <path d="M131.273 10.339V12.8662C131.273 13.4156 131.108 13.7453 130.392 13.7453H125.74V28.5518C125.74 29.2385 125.41 29.4308 124.859 29.4308H121.859C121.309 29.4308 120.978 29.2385 120.978 28.5518V13.7453H116.299C115.611 13.7453 115.418 13.4156 115.418 12.8662V10.339C115.418 9.78959 115.611 9.45996 116.299 9.45996H130.392C131.081 9.45996 131.273 9.78959 131.273 10.339Z" fill="white" />
                                            <path d="M138.76 9.4591C139.31 9.4591 139.641 9.65142 139.641 10.3382V20.8593L146.082 10.4755C146.468 9.87119 146.687 9.43164 147.458 9.43164H150.321C151.009 9.43164 151.202 9.76127 151.202 10.3107V28.496C151.202 29.1828 150.871 29.375 150.321 29.375H147.321C146.77 29.375 146.44 29.1828 146.44 28.496V17.9749L139.998 28.3586C139.613 28.963 139.393 29.4025 138.622 29.4025H135.842C135.154 29.4025 134.961 29.0729 134.961 28.5235V10.3382C134.961 9.65142 135.292 9.4591 135.842 9.4591H138.76Z" fill="white" />
                                            <path d="M172.59 10.3115L165.764 17.701L172.287 28.4419C172.535 28.8265 172.397 29.4034 171.819 29.4034H168.103C167.388 29.4034 166.975 29.0737 166.589 28.4419C166.589 28.4419 163.892 23.8818 162.24 21.1623L160.341 23.1401V28.5243C160.341 29.2111 160.011 29.4034 159.487 29.4034H156.542C155.964 29.4034 155.662 29.2111 155.662 28.5243V10.339C155.662 9.65221 155.964 9.45996 156.542 9.45996H159.543C160.065 9.45996 160.396 9.65221 160.396 10.339V17.0967L166.699 10.2016C167.305 9.54235 167.525 9.45996 168.213 9.45996H172.315C172.893 9.45996 172.893 10.0368 172.59 10.3115Z" fill="white" />
                                            <path d="M192.189 29.4034H188.996C188.335 29.4034 188.087 29.2111 187.84 28.4968L186.987 26.1069H179.554L178.701 28.4968C178.453 29.2385 178.205 29.4034 177.545 29.4034H174.352C173.691 29.4034 173.691 28.9089 173.828 28.5518L180.573 10.3939C180.82 9.76213 181.151 9.45996 181.811 9.45996H184.729C185.39 9.45996 185.693 9.76213 185.968 10.3939L192.684 28.5518C192.849 28.9089 192.849 29.4034 192.189 29.4034ZM185.582 21.849L183.298 15.1463L181.013 21.849H185.582Z" fill="white" />
                                            <path d="M4.67997 42.0937L7.37752 36.3799H8.75383L4.01934 46.434H2.64302L4.04687 43.4398L0.413391 36.3799H1.78971L4.67997 42.0937Z" fill="white" />
                                            <path d="M16.5988 45.3908V48.0004H15.3876V46.4347H10.1576V48.0004H8.94647V45.3908H9.90992C10.3778 44.0448 10.598 42.5339 10.598 40.8857V38.9902H15.4427V45.3908H16.5988ZM11.1486 45.3908H14.2591V40.0341H11.8368V41.078C11.8092 42.479 11.589 43.9349 11.1486 45.3908Z" fill="white" />
                                            <path d="M18.1675 45.5006C17.5069 44.7863 17.1766 43.8523 17.1766 42.6986C17.1766 41.5723 17.5069 40.6384 18.1675 39.8967C18.8281 39.1549 19.6815 38.7979 20.7825 38.7979C21.8835 38.7979 22.7369 39.1549 23.3975 39.8967C24.0581 40.6108 24.3884 41.5449 24.3884 42.6986C24.3884 43.8249 24.0581 44.7589 23.3975 45.5006C22.7369 46.2148 21.8835 46.5994 20.7825 46.5994C19.6815 46.5994 18.8006 46.2148 18.1675 45.5006ZM19.0484 40.6384C18.6354 41.1328 18.4152 41.847 18.4152 42.6986C18.4152 43.5776 18.6354 44.2644 19.0484 44.7589C19.4612 45.2534 20.0393 45.5281 20.7825 45.5281C21.5257 45.5281 22.1038 45.2808 22.5167 44.7589C22.9296 44.2644 23.1498 43.5502 23.1498 42.6986C23.1498 41.8196 22.9296 41.1328 22.5167 40.6384C22.1038 40.1439 21.5257 39.8692 20.7825 39.8692C20.0393 39.8692 19.4612 40.1164 19.0484 40.6384Z" fill="white" />
                                            <path d="M28.9307 39.2924C29.9216 39.2924 30.6924 39.6221 31.2704 40.2539C31.8484 40.8857 32.1512 41.7922 32.1512 42.946C32.1512 44.0723 31.8484 44.9513 31.2429 45.6106C30.6373 46.2699 29.8666 46.5995 28.9307 46.5995C27.7746 46.5995 26.8937 46.1875 26.2882 45.3359C25.6825 44.4843 25.3798 43.3031 25.3798 41.7922C25.3798 40.5561 25.5725 39.5397 25.9578 38.743C26.3432 37.9464 27.0313 37.2871 27.9948 36.7652C28.9582 36.2433 30.2794 35.9411 31.9035 35.8037L31.8209 36.8751C30.307 36.9574 29.1233 37.2871 28.2425 37.864C27.3617 38.4409 26.8387 39.2375 26.701 40.2265C27.2791 39.5946 27.9948 39.2924 28.9307 39.2924ZM26.591 41.4626V41.7647C26.591 44.2921 27.3617 45.5282 28.9307 45.5282C29.5363 45.5282 30.0318 45.2809 30.3896 44.814C30.7474 44.347 30.9126 43.7152 30.9126 42.946C30.9126 42.1494 30.7474 41.545 30.3896 41.078C30.0318 40.611 29.5638 40.3638 28.9307 40.3638C27.9673 40.3638 27.1965 40.7209 26.591 41.4626Z" fill="white" />
                                            <path d="M34.6559 41.8472H38.6197V38.9902H39.8308V46.4347H38.6197V42.9185H34.6559V46.4347H33.4447V38.9902H34.6559V41.8472Z" fill="white" />
                                            <path d="M41.923 45.8851C41.4 45.4181 41.1523 44.8412 41.1523 44.1819C41.1523 43.4952 41.4 42.9183 41.923 42.4788C42.446 42.0392 43.1342 41.792 43.9599 41.792C44.7857 41.792 45.5565 42.0392 46.2722 42.5337V41.5997C46.2722 41.0503 46.1345 40.6383 45.8593 40.3361C45.584 40.0339 45.0885 39.8965 44.4004 39.8965C43.6296 39.8965 42.9414 40.1712 42.3084 40.6932L41.5651 39.8965C42.4184 39.1824 43.4094 38.8252 44.5105 38.8252C45.4464 38.8252 46.1896 39.045 46.7126 39.512C47.2356 39.979 47.4833 40.5833 47.4833 41.3525V46.4345H46.2722V45.6379C45.639 46.2971 44.8683 46.6268 43.9599 46.6268C43.1342 46.5993 42.446 46.3521 41.923 45.8851ZM44.2627 42.8359C43.6847 42.8359 43.2167 42.9458 42.8864 43.193C42.5561 43.4127 42.3909 43.7699 42.3909 44.2094C42.3909 44.6489 42.5561 44.9785 42.8864 45.2258C43.2167 45.4456 43.6847 45.5829 44.2627 45.5829C45.0059 45.5829 45.6666 45.2807 46.2722 44.6489V43.6325C45.6941 43.0831 45.0059 42.8359 44.2627 42.8359Z" fill="white" />
                                            <path d="M53.6494 43.3579H51.7226L49.7407 46.4346H48.3094L50.4564 43.1931C49.4104 42.8909 48.8874 42.2316 48.8874 41.1877C48.8874 40.4735 49.1352 39.9516 49.6307 39.567C50.1261 39.1824 50.8418 39.0176 51.7776 39.0176H54.8606V46.462H53.6494V43.3579ZM51.8328 42.3141H53.6219V40.0065H51.8328C51.2547 40.0065 50.8143 40.1164 50.5115 40.3087C50.2087 40.501 50.071 40.8032 50.071 41.1603C50.071 41.5174 50.2087 41.7921 50.5115 42.0119C50.8143 42.2041 51.2547 42.3141 51.8328 42.3141Z" fill="white" />
                                            <path d="M62.5681 46.4064V40.0058H59.843V38.9619H66.5046V40.0058H63.7792V46.4064H62.5681Z" fill="white" />
                                            <path d="M67.9905 45.5006C67.3295 44.7863 66.9997 43.8523 66.9997 42.6986C66.9997 41.5723 67.3295 40.6384 67.9905 39.8967C68.6509 39.1549 69.5041 38.7979 70.6056 38.7979C71.7063 38.7979 72.5596 39.1549 73.2206 39.8967C73.8809 40.6108 74.2114 41.5449 74.2114 42.6986C74.2114 43.8249 73.8809 44.7589 73.2206 45.5006C72.5596 46.2148 71.7063 46.5994 70.6056 46.5994C69.5041 46.5994 68.6509 46.2148 67.9905 45.5006ZM68.8714 40.6384C68.4586 41.1328 68.2381 41.847 68.2381 42.6986C68.2381 43.5776 68.4586 44.2644 68.8714 44.7589C69.2842 45.2534 69.8623 45.5281 70.6056 45.5281C71.3488 45.5281 71.9269 45.2808 72.3397 44.7589C72.7525 44.2644 72.9724 43.5502 72.9724 42.6986C72.9724 41.8196 72.7525 41.1328 72.3397 40.6384C71.9269 40.1439 71.3488 39.8692 70.6056 39.8692C69.8623 39.8692 69.2842 40.1164 68.8714 40.6384Z" fill="white" />
                                            <path d="M78.1477 42.8086C78.8634 42.8086 79.4691 42.5888 79.9648 42.1219V38.9902H81.1756V46.4347H79.9648V43.1657C79.2762 43.6327 78.6158 43.8799 77.9825 43.8799C77.1016 43.8799 76.4136 43.6602 75.9179 43.1932C75.4228 42.7262 75.1752 42.0394 75.1752 41.1055V39.0177H76.386V41.023C76.386 41.6549 76.5236 42.1219 76.8264 42.3966C77.1016 42.6713 77.542 42.8086 78.1477 42.8086Z" fill="white" />
                                            <path d="M82.9097 38.9902H84.1205V42.8635L87.4241 38.9902H88.9101L86.3503 41.9296L89.3505 46.4347H87.9745L85.607 42.7811L84.1481 44.4568V46.4622H82.9367V38.9902H82.9097Z" fill="white" />
                                            <path d="M90.4519 45.8851C89.9292 45.4181 89.6816 44.8412 89.6816 44.1819C89.6816 43.4952 89.9292 42.9183 90.4519 42.4788C90.9753 42.0392 91.6633 41.792 92.4889 41.792C93.3152 41.792 94.0854 42.0392 94.8011 42.5337V41.5997C94.8011 41.0503 94.6635 40.6383 94.3883 40.3361C94.1131 40.0339 93.618 39.8965 92.9293 39.8965C92.1591 39.8965 91.4704 40.1712 90.8377 40.6932L90.0944 39.8965C90.9477 39.1824 91.9385 38.8252 93.04 38.8252C93.9755 38.8252 94.7188 39.045 95.2415 39.512C95.7649 39.979 96.0125 40.5833 96.0125 41.3525V46.4345H94.8011V45.6379C94.1684 46.2971 93.3975 46.6268 92.4889 46.6268C91.6633 46.5993 90.9753 46.3521 90.4519 45.8851ZM92.7918 42.8359C92.2137 42.8359 91.7463 42.9458 91.4158 43.193C91.0853 43.4127 90.92 43.7699 90.92 44.2094C90.92 44.6489 91.0853 44.9785 91.4158 45.2258C91.7463 45.4456 92.2137 45.5829 92.7918 45.5829C93.535 45.5829 94.196 45.2807 94.8011 44.6489V43.6325C94.223 43.0831 93.535 42.8359 92.7918 42.8359Z" fill="white" />
                                            <path d="M101.875 46.4066V36.3799H105.317C106.362 36.3799 107.188 36.6271 107.766 37.0941C108.344 37.5886 108.647 38.2204 108.647 39.017C108.647 39.5115 108.51 39.9511 108.261 40.3356C108.014 40.7202 107.656 40.9675 107.188 41.0773C107.821 41.2147 108.289 41.4894 108.62 41.9289C108.949 42.3684 109.115 42.8904 109.115 43.5222C109.115 44.4287 108.812 45.1429 108.179 45.6374C107.546 46.1319 106.665 46.4066 105.509 46.4066H101.875ZM103.114 40.6378H105.124C105.839 40.6378 106.39 40.5005 106.775 40.1983C107.161 39.8961 107.353 39.5115 107.353 39.017C107.353 38.0007 106.61 37.4788 105.124 37.4788H103.114V40.6378ZM107.849 43.5222C107.849 42.341 106.995 41.7641 105.317 41.7641H103.114V45.2802H105.317C107.023 45.3078 107.849 44.7034 107.849 43.5222Z" fill="white" />
                                            <path d="M110.794 45.8851C110.271 45.4181 110.023 44.8412 110.023 44.1819C110.023 43.4952 110.271 42.9183 110.794 42.4788C111.317 42.0392 112.005 41.792 112.831 41.792C113.657 41.792 114.428 42.0392 115.143 42.5337V41.5997C115.143 41.0503 115.006 40.6383 114.73 40.3361C114.455 40.0339 113.959 39.8965 113.272 39.8965C112.501 39.8965 111.813 40.1712 111.179 40.6932L110.436 39.8965C111.29 39.1824 112.281 38.8252 113.381 38.8252C114.318 38.8252 115.061 39.045 115.584 39.512C116.106 39.979 116.355 40.5833 116.355 41.3525V46.4345H115.143V45.6379C114.51 46.2971 113.74 46.6268 112.831 46.6268C111.978 46.5993 111.317 46.3521 110.794 45.8851ZM113.106 42.8359C112.528 42.8359 112.06 42.9458 111.73 43.193C111.4 43.4127 111.235 43.7699 111.235 44.2094C111.235 44.6489 111.4 44.9785 111.73 45.2258C112.06 45.4456 112.528 45.5829 113.106 45.5829C113.85 45.5829 114.51 45.2807 115.116 44.6489V43.6325C114.538 43.0831 113.877 42.8359 113.106 42.8359Z" fill="white" />
                                            <path d="M122.685 45.3908H124.942V38.9902H126.154V46.4347H118.006V38.9902H119.217V45.3908H121.474V38.9902H122.685V45.3908Z" fill="white" />
                                            <path d="M131.246 46.5994C130.117 46.5994 129.209 46.2422 128.493 45.5006C127.778 44.7589 127.42 43.8523 127.42 42.6986C127.42 41.5723 127.75 40.6384 128.411 39.8967C129.072 39.1549 129.925 38.7979 130.971 38.7979C132.016 38.7979 132.843 39.1549 133.503 39.8967C134.164 40.6384 134.466 41.5723 134.466 42.7261C134.466 42.9184 134.466 43.0832 134.439 43.1656H128.686C128.769 43.8799 129.016 44.4567 129.457 44.8687C129.897 45.2808 130.475 45.5006 131.163 45.5006C131.934 45.5006 132.594 45.1709 133.2 44.4842L134.081 45.116C133.393 46.1049 132.43 46.5994 131.246 46.5994ZM128.713 42.1492H133.228C133.2 41.4625 132.953 40.9131 132.54 40.501C132.127 40.0889 131.604 39.8692 130.998 39.8692C130.365 39.8692 129.869 40.0614 129.457 40.4735C129.044 40.8855 128.796 41.4625 128.713 42.1492Z" fill="white" />
                                            <path d="M142.421 46.4065H141.21V40.8026L136.999 46.4065H135.788V38.9621H136.999V44.566L141.21 38.9621H142.421V46.4065ZM139.118 36.9842C139.779 36.9842 140.274 36.5722 140.549 35.748L141.403 35.9678C141.237 36.5722 140.99 37.0392 140.577 37.3963C140.192 37.7533 139.696 37.9182 139.091 37.9182C137.934 37.9182 137.164 37.2589 136.806 35.9953L137.659 35.7755C137.962 36.5721 138.43 36.9842 139.118 36.9842Z" fill="white" />
                                            <path d="M152.029 38.9902H153.239V42.6713L156.157 38.9902H157.589L155.194 41.9021L158.002 46.4072H156.681L154.478 42.7811L153.239 44.292V46.4072H152.029V44.292L150.79 42.7811L148.587 46.4072H147.267L150.074 41.9021L147.68 38.9902H149.111L152.029 42.6713V38.9902Z" fill="white" />
                                            <path d="M165.434 46.4064H164.223V40.8024L160.011 46.4064H158.8V38.9619H160.011V44.5659L164.223 38.9619H165.434V46.4064Z" fill="white" />
                                            <path d="M169.562 45.5282C170.113 45.5282 170.554 45.4183 170.856 45.226C171.159 45.0337 171.324 44.7315 171.324 44.3744C171.324 43.9349 171.104 43.6053 170.664 43.3855C170.223 43.1383 169.7 43.0284 169.067 43.0284H168.269V41.9571H169.067C169.645 41.9571 170.113 41.8472 170.498 41.6549C170.884 41.4626 171.049 41.1879 171.049 40.8308C171.049 40.5286 170.911 40.2814 170.636 40.1165C170.361 39.9518 170.003 39.8418 169.562 39.8418C168.847 39.8418 168.186 40.0891 167.581 40.611L166.755 39.8693C167.525 39.1551 168.434 38.7705 169.508 38.7705C170.305 38.7705 170.966 38.9354 171.489 39.2924C172.012 39.6496 172.26 40.1165 172.26 40.7484C172.26 41.5725 171.82 42.1219 170.939 42.479C171.434 42.6163 171.847 42.8636 172.123 43.1933C172.398 43.5229 172.535 43.9074 172.535 44.347C172.535 45.0062 172.26 45.5282 171.737 45.9403C171.186 46.3523 170.471 46.5446 169.535 46.5446C168.269 46.5446 167.223 46.1875 166.397 45.4458L167.195 44.6217C167.939 45.2535 168.709 45.5282 169.562 45.5282Z" fill="white" />
                                            <path d="M175.068 41.8472H179.032V38.9902H180.243V46.4347H179.032V42.9185H175.068V46.4347H173.857V38.9902H175.068V41.8472Z" fill="white" />
                                            <path d="M188.638 46.4064H187.427V40.8024L183.215 46.4064H182.004V38.9619H183.215V44.5659L187.427 38.9619H188.638V46.4064Z" fill="white" />
                                            <path d="M190.785 46.3241C190.62 46.1593 190.51 45.9396 190.51 45.6923C190.51 45.4451 190.593 45.2253 190.785 45.0605C190.95 44.8957 191.171 44.7858 191.419 44.7858C191.666 44.7858 191.887 44.8682 192.052 45.0605C192.216 45.2253 192.327 45.4451 192.327 45.6923C192.327 45.9396 192.244 46.1593 192.052 46.3241C191.887 46.489 191.666 46.5988 191.419 46.5988C191.171 46.5988 190.978 46.489 190.785 46.3241ZM191.06 43.9892L190.703 38.9621V36.3799H192.134V38.9896L191.776 44.0167H191.06V43.9892Z" fill="white" />
                                            <path d="M242 20.9805C242 28.0992 236.137 33.9609 228.791 33.9609C226.596 33.9609 224.54 33.4383 222.732 32.519C218.456 30.3447 215.582 25.9749 215.582 20.9805C215.582 13.8617 221.445 8 228.791 8C236.137 8 242 13.8617 242 20.9805Z" stroke="white" strokeWidth="14.3163" />
                                            <path d="M210.869 42.7711V21.7412L222.63 36.832L212.428 43.1059C212.141 43.2821 211.811 43.3753 211.475 43.3753C211.141 43.3753 210.869 43.1048 210.869 42.7711Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Сеть дилерских центров по продаже новых автомобилей
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за август 2024</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    14243
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    look-a-like
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    14200
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    87
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    MQL
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item last"
                                            >
                                                <div className="sw_rev_item_right_list_item-title"></div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    12,6%
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    конверсии в продажу
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title big">
                                        <img src="./img/reviews/forklift-logo.png" alt="FORKLIFT" />
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Вилочные погрузчики премиум-класса
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за ноябрь 2023 - июнь 2024</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    40000
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    look-a-like
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    40000
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    739
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    MQL
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item last"
                                            >
                                                <div className="sw_rev_item_right_list_item-title"></div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    9%
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    конверсии в продажу
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="sw_rev_item">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-6 col-md-6">
                                <div className="sw_rev_item_left">
                                    <div className="sw_rev_item_left-title">
                                        <svg width="312" height="40" viewBox="0 0 312 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M280.299 0H311.444V8.5414H291.939V14.9112H310.033V23.0793H291.939V30.9674H312V39.9987H280.299V0ZM275.156 39.7438H263.612V9.78469H254.537V22.006C254.643 25.7231 254.396 29.4419 253.798 33.1123C253.611 34.1785 253.199 35.1929 252.59 36.0884C251.981 36.984 251.189 37.7402 250.266 38.3071C247.451 39.6057 244.354 40.1721 241.261 39.9538C239.805 39.9349 238.353 39.7955 236.92 39.5371V31.4657H238.675C239.275 31.5274 239.881 31.4622 240.454 31.2744C241.027 31.0866 241.554 30.7804 242 30.3757C242.77 29.1792 243.112 27.7577 242.97 26.3425V0H275.294L275.156 39.7438Z" fill="white" />
                                            <path d="M198.586 20.0127C198.24 14.6445 200.13 9.36304 203.851 5.30317C205.791 3.48644 208.084 2.08752 210.588 1.1933C213.124 0.284941 215.817 -0.107194 218.507 0.0400027C221.22 -0.12875 223.939 0.243466 226.507 1.13497C229.043 2.01426 231.373 3.40206 233.353 5.21317C237.033 9.20138 238.9 14.4079 238.547 19.6977C238.663 23.5383 237.849 27.35 236.174 30.809C234.7 33.6578 232.414 36.0066 229.605 37.5588C226.302 39.2793 222.609 40.1159 218.886 39.9871C215.17 40.1043 211.475 39.3896 208.072 37.8955C205.154 36.4342 202.735 34.1401 201.123 31.304C199.289 27.8318 198.413 23.9347 198.586 20.0127ZM210.443 20.0127C210.18 22.9843 210.951 25.9555 212.626 28.4258C213.366 29.2241 214.279 29.8641 215.3 30.3024C216.328 30.7425 217.435 30.9695 218.554 30.9695C219.672 30.9695 220.779 30.7425 221.807 30.3024C222.82 29.8702 223.732 29.231 224.483 28.4258C225.881 26.7608 226.57 23.7693 226.57 19.4277C226.809 16.5996 226.036 13.7784 224.388 11.4663C223.658 10.6314 222.746 9.97367 221.724 9.54304C220.685 9.10515 219.562 8.90143 218.435 8.94639C217.351 8.95048 216.281 9.19168 215.3 9.65304C214.335 10.1063 213.485 10.7725 212.814 11.6013C211.065 14.0596 210.227 17.0494 210.443 20.0577V20.0127ZM195.138 39.9988H183.336V9.84803H170.305V39.9988H158.503V3.98301e-06H195.209L195.138 39.9988ZM116.828 19.9277C116.511 14.554 118.322 9.27128 121.87 5.21984C125.8 1.84886 130.809 -0.00313472 135.989 3.98301e-06C141.178 3.98301e-06 146.191 1.85328 150.107 5.21984C151.859 7.18386 153.204 9.47461 154.066 11.9602C154.928 14.4458 155.289 17.0771 155.129 19.7027C155.231 23.5307 154.454 27.3313 152.857 30.8124C151.471 33.6388 149.272 35.9874 146.542 37.5572C143.399 39.2728 139.853 40.1121 136.274 39.9871C132.705 40.0975 129.159 39.3816 125.913 37.8955C123.096 36.4051 120.788 34.1111 119.281 31.3057C117.497 27.787 116.652 23.868 116.828 19.9277ZM128.185 19.9277C127.918 22.8858 128.654 25.8477 130.276 28.3375C130.983 29.1408 131.858 29.7824 132.837 30.2224C134.313 30.8848 135.962 31.0593 137.545 30.7206C139.127 30.3819 140.56 29.5476 141.635 28.3391C143.252 25.6324 143.96 22.4802 143.657 19.3427C143.894 16.5252 143.147 13.7128 141.543 11.383C140.859 10.5525 139.991 9.89287 139.007 9.45637C138.019 9.01834 136.943 8.81524 135.863 8.86306C134.818 8.86515 133.787 9.1057 132.849 9.56637C131.913 10.0248 131.095 10.6919 130.458 11.5163C128.841 14.026 128.098 16.9985 128.345 19.9727L128.185 19.9277ZM80.0856 3.98301e-06H115.123V9.89469H103.36V39.9988H91.8949V9.89469H80.0856V3.98301e-06ZM43.3797 0.030003H65.2898C66.8127 -0.0800021 68.3423 0.116763 69.7877 0.608617C71.233 1.10047 72.5648 1.87739 73.7037 2.89325C74.6589 3.80891 75.4131 4.91283 75.9186 6.13502C76.4241 7.3572 76.6698 8.67097 76.6402 9.99302C76.7211 11.9254 76.1588 13.83 75.0414 15.4094C73.9239 16.9888 72.3141 18.1539 70.4636 18.7228C72.8191 19.199 74.9455 20.4535 76.5001 22.2843C77.8169 24.1273 78.4884 26.3528 78.4104 28.6158C78.4479 30.5733 77.9741 32.5067 77.0356 34.2256C76.1455 35.8323 74.8524 37.1803 73.2833 38.1371C71.9076 38.8587 70.4028 39.3016 68.8552 39.4404C67.1184 39.7238 65.3682 39.9088 63.6113 39.9988H43.403V0.030003H43.3797ZM55.1973 15.6962H60.2777C61.6245 15.8457 62.9787 15.4892 64.0768 14.6962C64.4552 14.3257 64.749 13.8778 64.9382 13.3834C65.1274 12.8889 65.2075 12.3595 65.173 11.8313C65.2077 11.3207 65.1273 10.8089 64.9376 10.3335C64.7478 9.85812 64.4537 9.43137 64.0768 9.08472C62.9996 8.32407 61.6838 7.97728 60.3712 8.10808H55.1973V15.6962ZM55.1973 31.3857H61.1637C62.6769 31.539 64.1939 31.1335 65.4282 30.2457C65.8416 29.861 66.1662 29.391 66.3794 28.8683C66.5926 28.3457 66.6893 27.7829 66.6629 27.2192C66.6843 26.6835 66.5844 26.1499 66.3707 25.6582C66.1569 25.1664 65.8347 24.7293 65.4282 24.3792C64.171 23.5247 62.6538 23.1373 61.1403 23.2843H55.1973V31.3857ZM27.3909 33.449H13.9666L12.1063 39.9988H0L14.3904 3.98301e-06H27.2975L41.7112 39.9988H29.323L27.3909 33.449ZM25.0367 24.7776L20.6788 10.3947L16.4859 24.7776H25.0367Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className="sw_rev_item_left-subtitle">
                                        Один из крупнейших дилерских комплексов на территории г. Санкт-Петербурга и Ленинградской области
                                    </div>
                                    <div className="sw_rev_item_left_time">
                                        <span>Данные за февраль - март 2024</span>
                                    </div>
                                    <div className="sw_rev_item_left_design">
                                        <span className="sw_rev_item_left_design-line_top"></span>
                                        <span className="sw_rev_item_left_design-line_right"></span>
                                        <span className="sw_rev_item_left_design-line_bot"></span>
                                        <span className="sw_rev_item_left_design-cube left"></span>
                                        <span className="sw_rev_item_left_design-cube right"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="offset-xxl-2 offset-xl-0 col-md-6">
                                <div className="sw_rev_item_right">
                                    <div className="sw_rev_item_right_list row">
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Идентифицировано
                                                </div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    2867
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    look-a-like
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Обработано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    2799
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    контактов
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item"
                                            >
                                                <div className="sw_rev_item_right_list_item-title">Передано</div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    32
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    MQL
                                                </div>


                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-6">
                                            <div className="sw_rev_item_right_list_item last"
                                            >
                                                <div className="sw_rev_item_right_list_item-title"></div>
                                                <div className="sw_rev_item_right_list_item-num">
                                                    15%
                                                </div>
                                                <div className="sw_rev_item_right_list_item-text">
                                                    конверсии в продажу
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="reviews_wrap_item_swiper_btns">
                    <div className="swiper-button-prev reviews_wrap_item_swiper_btns-prev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                            <rect x="61" y="61" width="60" height="60" rx="12" transform="rotate(-180 61 61)"
                                fill="rgba(255, 255, 255, 0.14)" />
                            <rect x="61" y="61" width="60" height="60" rx="12" transform="rotate(-180 61 61)"
                                stroke="white" />
                            <path d="M22 31L40 31" stroke="white" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path d="M31 22L22 31L31 40" stroke="white" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="swiper-pagination reviews_wrap_item_swiper_btns-pagination"></div>
                    <div className="swiper-button-next reviews_wrap_item_swiper_btns-next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                            <rect x="1" y="1" width="60" height="60" rx="12" fill="rgba(255, 255, 255, 0.14)" />
                            <rect x="1" y="1" width="60" height="60" rx="12" stroke="white" />
                            <path d="M40 31L22 31" stroke="white" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path d="M31 40L40 31L31 22" stroke="white" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ReviewsSwiper;