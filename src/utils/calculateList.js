import { FESTIVAL_TEMPLATES } from '../data/festivals.js';

const round = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

export const generateGroceryList = (festivalName, guestCount) => {
  const safeGuestCount = Number.isFinite(Number(guestCount)) ? Math.max(0, Math.floor(Number(guestCount))) : 0;

  const template = FESTIVAL_TEMPLATES[festivalName] ?? [];

  return template.map((entry) => ({
    ...entry,
    totalQuantity: round(entry.quantityPerPerson * safeGuestCount)
  }));
};

export const getEstimatedBudget = (groceryList, priceMap = {}) => {
  const budget = groceryList.reduce((sum, grocery) => {
    const pricePerUnit = Number(priceMap[grocery.item] ?? 0);
    if (!Number.isFinite(pricePerUnit) || pricePerUnit < 0) {
      return sum;
    }

    return sum + grocery.totalQuantity * pricePerUnit;
  }, 0);

  return round(budget);
};
