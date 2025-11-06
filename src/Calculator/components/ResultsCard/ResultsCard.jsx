import React from 'react';
import { formatNumber } from '../../utils/calculations';
import { CONFIG } from '../../constants';
import './ResultsCard.scss'

const ResultsCard = ({ results, contacts, serviceType, averageCheck, techPackage, openModal, setCalculatorResult }) => {

    const getLidWord = (count) => {
        const mod10 = count % 10;
        const mod100 = count % 100;

        if (mod100 >= 11 && mod100 <= 14) {
            return 'лидов';
        }
        if (mod10 === 1) {
            return 'лид';
        }
        if (mod10 >= 2 && mod10 <= 4) {
            return 'лида';
        }
        return 'лидов';
    };

    const handleSubmit = () => {
        const submissionData = {
            timestamp: new Date().toISOString(),
            input: {
                // serviceType: serviceType,
                serviceName: `Название сервиса: ${CONFIG.SERVICE_OPTIONS.find(opt => opt.id === serviceType)?.name || ''}`,
                contacts: `Кол-во контактов: ${contacts}`,
                averageCheck: `Средний чек: ${averageCheck}`,
                techPackage: `Пакет: ${techPackage}`,
                techPackagePrice: `Стоимость пакета: ${CONFIG.TECH_PACKAGES[techPackage]?.price || 0}`,
                // techPackageDiscount: `Скидка на пакет: ${CONFIG.TECH_PACKAGES[techPackage]?.discount || 0}`,
                totalCost: `Общая стоимость: ${results.totalCost}`,
                conversionRate: `Конверсия: ${results.conversionRate}`,
                expectedConversions: `Ожидаемая конверсия: ${results.expectedConversions}`,
                costPerConversion: `Стоимость за конверсию: ${results.costPerConversion}`,
                packageCost: `Стоимость пакета: ${results.packageCost}`,
                totalCostWithPackage: `Общая стоимость с пакетом: ${results.totalCostWithPackage}`,
                contactProcessingCost: `Стоимость обработки контактов: ${results.contactProcessingCost}`,
                isTechSubscription: results.isTechSubscription
            },
            // calculations: {
            //     costPerContact: contacts > 0 && results.totalCost > 0 ? Math.round(results.totalCost / contacts) : 0,
            //     processingCostPerContact: contacts > 0 && results.contactProcessingCost > 0 ? Math.round(results.contactProcessingCost / contacts) : 0,
            //     conversionRatePercent: (results.conversionRate * 100).toFixed(1)
            // }
        };

        setCalculatorResult(submissionData)
    };

    if (!results || contacts === 0) return (
        <div className="results-card placeholder">
            <div className="results-header">Результаты расчета</div>
            <p>Введите данные для расчета.</p>
        </div>
    );

    return (
        <div className="results-card">
            <div className="results-header">
                {formatNumber(results.expectedConversions)} {getLidWord(results.expectedConversions)} (SQL)
            </div>

            <div className='result_wrap'>
                <div className="results-list">
                    <div className="result-item">
                        <span className="result-text">Прогноз конверсии: {(results.conversionRate * 100).toFixed(1)}%</span>
                    </div>

                    <div className="result-item">
                        <span className="result-text">
                            {serviceType === 3 ? "Стоимость обработки" : "Стоимость данных"}: {contacts > 0 && results.totalCost > 0 ? Math.round(results.totalCost / contacts) : 0}₽/ед
                        </span>
                    </div>

                    {(serviceType === 1 || serviceType === 2) && (
                        <div className="result-item">
                            <span className="result-text">
                                Обработка контакта: {results.isTechSubscription ? "Не предусмотрено" : `${results.pricePerContact}₽/ед`}
                            </span>
                        </div>
                    )}
                    <div className="result-item">
                        <span className="result-text">Подписка: {formatNumber(results.packageCost)} ₽</span>
                    </div>

                    <div className="result-item">
                        <span className="result-text">Стоимость лида: {results.expectedConversions > 0 ? formatNumber(results.costPerConversion) : 0} ₽</span>
                    </div>
                </div>

                <div className="result_wrap_budget">
                    <div className="budget budget-section">
                        <div className="budget-label">Бюджет:</div>
                        <div className="budget-value">{formatNumber(results.totalCostWithPackage)} ₽</div>
                    </div>

                    <button className="submit-button" onClick={() => {
                        handleSubmit()
                        openModal()
                    }}>
                        <span className="submit-text">ОТПРАВИТЬ ЗАЯВКУ</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsCard;