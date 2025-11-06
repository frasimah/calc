import CustomText from '../../utilities/CustomText/CustomText';
import './Products.scss'
import ProductsItem from './ProductsItem';
import ProductsItemContent from './ProductsItemContent';
import ProductsItemImage from './ProductsItemImage';
import ProductsItemTitle from './ProductsItemTitle';
import ProductsList from './ProductsList';
import { Link } from 'react-router-dom';


function Products({ className }) {

    const products = [
        {
            id: 1,
            image: './img/products/retargeting.jpg',
            imageSvg: './img/products/retargeting.svg',
            video: './img/products/retargeting.mp4',
            title: 'Retargeting to contact / call',
            description: 'Получаем контактные и поведенческие данные по функциональному коду на сайте рекламодателя',
            link: './img/pdf/retarget.pdf',
            modal: 'retargeting',
            tabId: '2',
            linkPage: '/product/retargeting-to-contact-call'
        },
        {
            id: 2,
            image: './img/products/segments.jpg',
            imageSvg: './img/products/segments.svg',
            video: './img/products/segments.mp4',
            title: 'Target segments',
            description: 'Подбираем аудиторию по всей вертикали отечественного онлайн спроса на продукты/услуги рекламодателя через DMP фильтрацию собственной Big Data',
            link: './img/pdf/target-data.pdf',
            modal: 'target',
            tabId: '1',
            linkPage: '/product/target-segments'
        },
        {
            id: 3,
            image: './img/products/telephony.jpg',
            imageSvg: './img/products/call-center.svg',
            video: './img/products/telephony.mp4',
            title: 'Call center telephony',
            description: 'Обходим спам-фильтры операторов и обеспечиваем максимально возможный (до 90%) показатель эффективности дозвона до заинтересованных потенциальных потребителей',
            link: './img/pdf/callcenter.pdf',
            modal: 'call',
            tabId: '3',
            linkPage: '/product/call-center-telephony'
        },
        {
            id: 4,
            image: './img/products/data.jpg',
            imageSvg: './img/products/data-enrichment.svg',
            video: './img/products/data.mp4',
            title: 'Data Enrichment',
            description: 'Обогащаем клиентские карточки в базе CRM заказчика контактными данными и данными о заинтересованности в продукте или услуге',
            link: './img/pdf/data.pdf',
            modal: 'data',
            tabId: '4',
            linkPage: '/product/data-enrichment'
        },
    ];

    return (
        <section id={'products'} className={`products ${className ? className : ''}`}>
            <div className="container">
                <div className="products_head">
                    <h2 className='products_head-title section_title'>
                        Продукты Reffection
                    </h2>
                </div>
                <ProductsList>
                    {products.map(product => (
                        <ProductsItem classCol='col-xl-3' key={product.id}>
                            <ProductsItemImage link={product.video} />
                            <ProductsItemContent>
                                <ProductsItemTitle>
                                    {product.title}
                                </ProductsItemTitle>
                                <CustomText className='white small products_wrap_item-text'>
                                    <p>
                                        {product.description}
                                    </p>
                                </CustomText>
                                <div className='products_wrap_item-btn'>
                                    <Link to={product?.linkPage} aria-label='Подробнее' className='products_wrap_item-btn-btn'>
                                        подробнее
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                                viewBox="0 0 14 14" fill="none">
                                                <path d="M0 7H14" stroke="#121212" />
                                                <path d="M7 14L7 2.68221e-07" stroke="#121212" />
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </ProductsItemContent>
                        </ProductsItem>
                    ))}
                </ProductsList>
                {/* <ProductModal isOpen={modalIsOpen} onRequestClose={closeModal} content={modalContent} /> */}
            </div>
        </section>
    );
}

export default Products;