import { nanoid } from 'nanoid';
import './InfoModal.scss'

const InfoModal = ({ isOpen, onClose, infoModalType }) => {

    const dataInfoModal = {
        product: {
            title: 'Информация об услугах',
            body: [
                {
                    title: 'Retargeting Trigger Leads',
                    text: 'Идентифицирует скрытых посетителей на конкретных страницах сайтов рекламодателя через лёгкий JS-код, фиксирующий geo, источник визита, устройство, время и поведение на страницах. Сопоставляет данные с Big Data Reffection и создаёт уникальный профиль пользователя. Определяет триггеры (поведенческие сигналы), которые показывают, насколько клиент готов к покупке — и возвращает его в воронку продаж.'
                },
                {
                    title: 'Segment Scoring',
                    text: 'Собирает данные на сайтах в нише рекламодателя, анализируя цифровой след пользователей через Big Data, DMP Reffection и ML-модели телеком-операторов. Определяет вероятностный уровень вовлечённости и платёжеспособности клиента, учитывая геолокацию, поведение в сети, звонковую активность и контентное потребление.'
                },
                {
                    title: 'Reactivation/Validation',
                    text: 'Дозванивается до 90% клиентов, используя технологии обхода спам-фильтров и адаптивную телефонию. Сценарии разговоров адаптированы под вашу нишу — операторы обучены продукту. Фильтрует, квалифицирует и возвращает до 50% потерянных лидов обратно в воронку продаж.'
                },
            ]
        },
        sub: {
            title: 'Информация о тарифах',
            body: [
                {
                    title: 'Tech',
                    text: 'Включает интеграцию с базой данных и клиентскими системами,  фильтрацию и шифрование данных, доступ к статистике и отчетам, а также выделенного менеджера сопровождения.'
                },
                {
                    title: 'Call',
                    text: 'Предоставляет выделенные телефонные номера без СПАМ-меток, интеграцию с CRM, настройку маршрутизации лидов, аналитику звонков и записи разговоров, а также закрепленного куратора операторов.'
                },
                {
                    title: 'Must',
                    text: 'Включает все из пакета CALL+TECH, дополнительно предлагая потенциал квалифицированных лидов, контроль выполнения плана, сортировку базы по разным параметрам и расширенные отчеты.'
                },
                {
                    title: 'Pro',
                    text: 'Содержит все возможности пакета MUST, а также более детальную аналитику (разметка источников данных), расширенные опции сортировки и подготовку аналитических справок.'
                },
            ]
        }
    }
    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`}
            onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content-wrap">
                    <div className="modal-content-wrap-content">
                        <div className="modal-header">
                            <div className="modal-header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} viewBox="0 0 54 54" fill="none">
                                    <path d="M19.5 37C21.626 38.5758 24.2115 39.5 27 39.5C29.7885 39.5 32.374 38.5758 34.5 37" stroke="#006AFE" strokeWidth={3} strokeLinecap="round" />
                                    <path d="M34.5 27C35.8807 27 37 25.3211 37 23.25C37 21.1789 35.8807 19.5 34.5 19.5C33.1193 19.5 32 21.1789 32 23.25C32 25.3211 33.1193 27 34.5 27Z" fill="#006AFE" />
                                    <path d="M19.5 27C20.8807 27 22 25.3211 22 23.25C22 21.1789 20.8807 19.5 19.5 19.5C18.1193 19.5 17 21.1789 17 23.25C17 25.3211 18.1193 27 19.5 27Z" fill="#006AFE" />
                                    <path d="M52 32C52 41.428 52 46.1423 49.071 49.071C46.1423 52 41.428 52 32 52" stroke="#006AFE" strokeWidth={3} strokeLinecap="round" />
                                    <path d="M22 52C12.5719 52 7.85789 52 4.92893 49.071C2 46.1423 2 41.428 2 32" stroke="#006AFE" strokeWidth={3} strokeLinecap="round" />
                                    <path d="M22 2C12.5719 2 7.85789 2 4.92893 4.92893C2 7.85789 2 12.5719 2 22" stroke="#006AFE" strokeWidth={3} strokeLinecap="round" />
                                    <path d="M32 2C41.428 2 46.1423 2 49.071 4.92893C52 7.85789 52 12.5719 52 22" stroke="#006AFE" strokeWidth={3} strokeLinecap="round" />
                                </svg>
                            </div>
                            {infoModalType === 'product-section' && (
                                <div className="modal-header-title">
                                    {dataInfoModal.product.title}
                                </div>
                            )}
                            {infoModalType === 'subscription-section' && (
                                <div className="modal-header-title">
                                    {dataInfoModal.sub.title}
                                </div>
                            )}
                            <button className="modal-close" onClick={onClose} aria-label="Закрыть модальное окно">
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.05078 14.9497L14.9503 5.05021" stroke="#121212" /><path d="M14.9492 14.9497L5.04972 5.05021" stroke="#121212" /></svg>
                            </button>
                        </div>
                        {infoModalType === 'product-section' && (
                            <div className="modal-body">
                                {dataInfoModal.product.body.map(item => (
                                    <div className="subscription-info" key={nanoid(3)}>
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {infoModalType === 'subscription-section' && (
                            <div className="modal-body">
                                {dataInfoModal.sub.body.map(item => (
                                    <div className="subscription-info" key={nanoid(4)}>
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <p>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default InfoModal;