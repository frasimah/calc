import CustomText from '../../utilities/CustomText/CustomText';
import './ProductsNew.scss'
import { Link } from 'react-router-dom';
import ProductsNewList from './ProductsNewList';
import ProductsNewItem from './ProductsNewItem';
import ProductsNewItemImage from './ProductsNewItemImage';
import ProductsNewItemContent from './ProductsNewItemContent';
import ProductsNewItemTitle from './ProductsNewItemTitle';


function ProductsNew({ className }) {

    const products = [
        {
            id: 1,
            image: './img/products/scoring.svg',
            title: 'Segment Scoring (Скоринг и&nbsp;сегментация пользователей в&nbsp;вашей нише)',
            description: `            
            <p>
                Продукт анализирует цифровые следы миллионов пользователей и находит тех, кто прямо сейчас выбирает продукт в вашей нише.
            </p>
            <p>
                Скоринговая модель объединяет Big Data Reffection и ML-платформы телеком-операторов: система рассчитывает вероятность покупки и передает рекламодателю контакты с самым высоким интересом.
            </p>
            `,
            tabId: '2',
            linkPage: '/product/segment-scoring'
        },
        {
            id: 2,
            image: './img/products/leads.svg',
            title: 'Retargeting Trigger Leads (Возврат пользователей, не&nbsp;оставивших заявку)',
            description: `            
            <p>
                Идентифицируем пользователей, ушедших с сайта без заявки
                и возвращаем их с контактами.
            </p>
            <p>
                Код фиксирует действия посетителей
                на сайте и формирует настраиваемый комплекс триггеров интереса. Система сопоставляет их с Big Data Reffection
                и передаёт только вовлечённых —
                с телефоном и email.
            </p>`,
            tabId: '1',
            linkPage: '/product/retargeting-trigger-leads'
        },
        {
            id: 3,
            image: './img/products/telephony.svg',
            title: 'Call Center (Интеллектуальный живой колл-центр)',
            description: `            
            <p>
                Системно обрабатываем базу: квалифицируем лиды и получаем согласие, дозваниваемся до недоступных, реактивируем отказников, валидируем заявки.
            </p>
            <p>
                Используем свою телефонию,
                150 обученных операторов и ML-аналитику звонков.
            </p>`,
            tabId: '3',
            linkPage: '/product/call-center'
        }
    ];

    return (
        <section id={'products'} className={`products ${className ? className : ''}`}>
            <div className="container">
                <div className="products_block_wrap">
                    <div className="products_head">
                        <h2 className='products_head-title section_title white'>
                            Продукты Reffection
                        </h2>
                    </div>
                    <ProductsNewList>
                        {products.map(product => (
                            <ProductsNewItem classCol='col-xl-4' key={product.id}>
                                <ProductsNewItemImage link={product.image} />
                                <ProductsNewItemContent>
                                    <ProductsNewItemTitle>
                                        {product.title}
                                    </ProductsNewItemTitle>
                                    <div className="products_wrap_item_descr">
                                        <CustomText className='white small products_wrap_item-text' dangerouslySetInnerHTML={{ __html: product.description }}>
                                        </CustomText>
                                    </div>
                                </ProductsNewItemContent>
                                <Link to={product?.linkPage} aria-label='Подробнее' className='products_wrap_item-btn'></Link>
                            </ProductsNewItem>
                        ))}
                    </ProductsNewList>
                </div>
            </div>
        </section>
    );
}

export default ProductsNew;                