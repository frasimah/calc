import { CONFIG } from '../constants';

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

export const getConversionRate = (averageCheck, serviceType) => {
    const base = CONFIG.CONVERSION?.BASE_BY_SERVICE?.[serviceType];
    const multipliers = CONFIG.CONVERSION?.MULTIPLIERS || [];
    if (!base) return 0;

    let multiplier = 0;
    for (const m of multipliers) {
        const min = m.min ?? 0;
        const max = m.max ?? Infinity;
        if (averageCheck >= min && averageCheck < max) {
            multiplier = m.multiplier;
            break;
        }
    }
    return base * (multiplier || 0);
};

export const getServicePrice = (serviceType, contacts, techPackageName) => {
    const packagePricing = CONFIG.SERVICE_PRICING_BY_PACKAGE?.[techPackageName]?.[serviceType];
    const pricing = packagePricing || CONFIG.SERVICE_PRICING[serviceType];
    if (!pricing) return 0;
    const { totalCost } = calculateCostByTiers(contacts, pricing);
    return totalCost;
};

export const getContactProcessingCost = (contacts) => {
    const pricing = CONFIG.CONTACT_PROCESSING_PRICING;
    if (!pricing) return { totalCost: 0, pricePerContact: 0 };

    const { totalCost, pricePerUnit } = calculateCostByTiers(contacts, pricing);
    return { totalCost, pricePerContact: pricePerUnit };
};

export const formatNumber = (num) => num.toLocaleString('ru-RU');