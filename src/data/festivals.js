export const FESTIVAL_TEMPLATES = {
  Diwali: [
    { item: 'Rice', unit: 'kg', quantityPerPerson: 0.2 },
    { item: 'Wheat Flour', unit: 'kg', quantityPerPerson: 0.15 },
    { item: 'Sugar', unit: 'kg', quantityPerPerson: 0.08 },
    { item: 'Ghee', unit: 'litre', quantityPerPerson: 0.03 },
    { item: 'Dry Fruits Mix', unit: 'kg', quantityPerPerson: 0.04 },
    { item: 'Oil', unit: 'litre', quantityPerPerson: 0.05 }
  ],
  Eid: [
    { item: 'Basmati Rice', unit: 'kg', quantityPerPerson: 0.25 },
    { item: 'Mutton', unit: 'kg', quantityPerPerson: 0.3 },
    { item: 'Curd', unit: 'kg', quantityPerPerson: 0.1 },
    { item: 'Onion', unit: 'kg', quantityPerPerson: 0.08 },
    { item: 'Tomato', unit: 'kg', quantityPerPerson: 0.07 },
    { item: 'Spice Mix', unit: 'kg', quantityPerPerson: 0.02 }
  ],
  Christmas: [
    { item: 'All-purpose Flour', unit: 'kg', quantityPerPerson: 0.12 },
    { item: 'Butter', unit: 'kg', quantityPerPerson: 0.06 },
    { item: 'Eggs', unit: 'pcs', quantityPerPerson: 1 },
    { item: 'Milk', unit: 'litre', quantityPerPerson: 0.12 },
    { item: 'Sugar', unit: 'kg', quantityPerPerson: 0.09 },
    { item: 'Chicken', unit: 'kg', quantityPerPerson: 0.22 }
  ],
  Pongal: [
    { item: 'Raw Rice', unit: 'kg', quantityPerPerson: 0.2 },
    { item: 'Moong Dal', unit: 'kg', quantityPerPerson: 0.08 },
    { item: 'Jaggery', unit: 'kg', quantityPerPerson: 0.1 },
    { item: 'Milk', unit: 'litre', quantityPerPerson: 0.1 },
    { item: 'Cashews', unit: 'kg', quantityPerPerson: 0.02 },
    { item: 'Raisins', unit: 'kg', quantityPerPerson: 0.015 }
  ]
};

export const FESTIVALS = Object.keys(FESTIVAL_TEMPLATES);
