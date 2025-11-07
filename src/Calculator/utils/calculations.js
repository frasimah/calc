import { CONFIG } from '../constants';

// Определяет плоскую цену за единицу для выбранного объёма
// Логика:
// - если объём >= максимального порога, берём цену из последнего порога
// - если объём <= первого ненулевого порога, берём цену из начального порога (contacts: 0)
// - иначе берём цену из наибольшего порога, который <= выбранного объёма
const getUnitPriceForVolume = (pricing, contacts) => {
    if (!Array.isArray(pricing) || pricing.length === 0) return 0;
    const sorted = pricing.slice().sort((a, b) => a.contacts - b.contacts);
    const priceProp = sorted[0].price_per_contact !== undefined ? 'price_per_contact' : 'price_per_call';

    const last = sorted[sorted.length - 1];
    if (contacts >= last.contacts) return last[priceProp] ?? 0;

    // найти первый ненулевой порог (обычно 1000)
    const firstNonZeroIdx = sorted.findIndex(t => t.contacts > 0);
    if (firstNonZeroIdx !== -1 && contacts <= sorted[firstNonZeroIdx].contacts) {
        return sorted[0][priceProp] ?? 0;
    }

    for (let i = sorted.length - 1; i >= 0; i--) {
        if (sorted[i].contacts <= contacts) {
            return sorted[i][priceProp] ?? 0;
        }
    }
    return sorted[0][priceProp] ?? 0;
};

export const calculateCostByTiers = (contacts, pricing) => {
    let totalCost = 0;
    let remainingContacts = contacts;
    let pricePerUnit = 0;

    for (let i = 0; i < pricing.length; i++) {
        const tier = pricing[i];
        const nextTier = pricing[i + 1];

        const tierStart = tier.contacts;
        const tierEnd = nextTier ? nextTier.contacts : Infinity;
        const tierSize = Math.min(remainingContacts, tierEnd - tierStart);

        if (tierSize > 0) {
            const unitPrice = tier.price_per_contact ?? tier.price_per_call ?? 0;
            totalCost += tierSize * unitPrice;
            pricePerUnit = unitPrice;
            remainingContacts -= tierSize;
        }

        if (remainingContacts <= 0) break;
    }

    return { totalCost, pricePerUnit };
};

export const getServicePrice = (serviceType, contacts, techPackageName) => {
    const packagePricing = CONFIG.SERVICE_PRICING_BY_PACKAGE?.[techPackageName]?.[serviceType];
    const pricing = packagePricing || CONFIG.SERVICE_PRICING[serviceType];
    if (!pricing) return 0;
    const unitPrice = getUnitPriceForVolume(pricing, contacts);
    return contacts * unitPrice;
};

// Конверсия по типам сервиса и среднему чеку
export const getConversionRate = (averageCheck, serviceType) => {
    // Базовая шкала Segment Scoring в зависимости от среднего чека
    let baseRate;
    if (averageCheck <= 60000) baseRate = 0.03;
    else if (averageCheck <= 150000) baseRate = 0.02;
    else if (averageCheck >= 3000000) baseRate = 0.005;
    else baseRate = 0.01;

    // Мультипликаторы по типу услуги:
    // 1: Segment Scoring — базовая шкала
    // 2: Retargeting Trigger Leads — вдвое больше
    // 3: Reactivation/Validation (Call Center) — втрое больше
    const serviceMultiplier = serviceType === 2 ? 2 : serviceType === 3 ? 3 : 1;

    const rate = baseRate * serviceMultiplier;
    // Защита от некорректных значений (не более 100%)
    return Math.min(rate, 1);
};

// Возвращает суммарную стоимость и выбранную плоскую цену за единицу
export const getServicePriceDetails = (serviceType, contacts, techPackageName) => {
    const packagePricing = CONFIG.SERVICE_PRICING_BY_PACKAGE?.[techPackageName]?.[serviceType];
    const pricing = packagePricing || CONFIG.SERVICE_PRICING[serviceType];
    if (!pricing) return { totalCost: 0, pricePerUnit: 0 };
    const unitPrice = getUnitPriceForVolume(pricing, contacts);
    return { totalCost: contacts * unitPrice, pricePerUnit: unitPrice };
};

export const getContactProcessingCost = (contacts) => {
    const pricing = CONFIG.CONTACT_PROCESSING_PRICING;
    if (!pricing) return { totalCost: 0, pricePerContact: 0 };

    const unitPrice = getUnitPriceForVolume(pricing, contacts);
    return { totalCost: contacts * unitPrice, pricePerContact: unitPrice };
};

export const formatNumber = (num) => num.toLocaleString('ru-RU');