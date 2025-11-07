import { useMemo } from 'react';
import { CONFIG } from '../constants';
import { getConversionRate, getServicePriceDetails, getContactProcessingCost } from '../utils/calculations';

export const useCalculator = (serviceType, contacts, averageCheck, techPackageName) => {


    return useMemo(() => {
        if (!averageCheck || averageCheck <= 0) {
            return {
                totalCost: 0,
                conversionRate: 0,
                expectedConversions: 0,
                costPerConversion: 0,
                packageCost: 0,
                totalCostWithPackage: 0,
                contactProcessingCost: 0,
                isTechSubscription: false
            };
        }

        const techPackage = CONFIG.TECH_PACKAGES[techPackageName] || CONFIG.TECH_PACKAGES["Tech"];
        const packageCost = techPackage.price;
        const discount = techPackage.discount;

        const serviceDetails = getServicePriceDetails(serviceType, contacts, techPackageName);
        let dataCost = serviceDetails.totalCost;
        let dataPricePerUnit = serviceDetails.pricePerUnit;
        let contactProcessingCost = 0;
        let pricePerContact = 0;
        let isTechSubscription = techPackageName === "Tech" || techPackageName === "Call";

        if (serviceType === 1 || serviceType === 2) {
            if (!isTechSubscription) {
                const processingResult = getContactProcessingCost(contacts);
                contactProcessingCost = processingResult.totalCost;
                pricePerContact = processingResult.pricePerContact;
            }
        } else if (serviceType === 3) {
            isTechSubscription = true;
        }

        const totalServiceCost = dataCost + contactProcessingCost;
        const discountedServiceCost = totalServiceCost * (1 - discount);
        const totalCostWithPackage = discountedServiceCost + packageCost;

        const conversionRate = getConversionRate(averageCheck, serviceType);
        const expectedConversions = Math.round(contacts * conversionRate);
        const costPerConversion = expectedConversions > 0 ? Math.round(totalCostWithPackage / expectedConversions) : 0;

        // Console log: подробный отчет по расчетам
        try {
            const costPerDataUnit = dataPricePerUnit || 0;
            const processingCostPerUnit = contacts > 0 && contactProcessingCost > 0 ? (contactProcessingCost / contacts) : 0;
            console.groupCollapsed(
                `[Calculator] service=${serviceType} contacts=${contacts} avgCheck=${averageCheck} package=${techPackageName}`
            );
            console.table({
                conversionRate_percent: Number((conversionRate * 100).toFixed(2)),
                expectedConversions,
                costPerConversion,
                contacts,
                averageCheck,
                serviceType,
                techPackage: techPackageName,
                isTechSubscription,
                discount_percent: Number((discount * 100).toFixed(2)),
                dataCost,
                costPerDataUnit,
                contactProcessingCost,
                processingCostPerUnit,
                packageCost,
                totalServiceCost,
                discountedServiceCost,
                totalCostWithPackage
            });
            console.groupEnd();
        } catch (e) {
            // не ломаем рендер из-за логгирования
        }

        return {
            totalCost: dataCost,
            conversionRate,
            expectedConversions,
            costPerConversion,
            packageCost,
            totalCostWithPackage,
            contactProcessingCost,
            pricePerContact,
            dataPricePerUnit,
            isTechSubscription
        };
    }, [serviceType, contacts, averageCheck, techPackageName]);
};