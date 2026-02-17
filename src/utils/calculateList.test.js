import test from 'node:test';
import assert from 'node:assert/strict';

import { generateGroceryList, getEstimatedBudget } from './calculateList.js';

test('generateGroceryList scales values by guest count', () => {
  const list = generateGroceryList('Diwali', 10);
  const rice = list.find((item) => item.item === 'Rice');

  assert.equal(rice.totalQuantity, 2);
});

test('generateGroceryList handles invalid guest count', () => {
  const list = generateGroceryList('Eid', 'abc');
  const mutton = list.find((item) => item.item === 'Mutton');

  assert.equal(mutton.totalQuantity, 0);
});

test('getEstimatedBudget computes totals from price map', () => {
  const list = [
    { item: 'Rice', totalQuantity: 2 },
    { item: 'Sugar', totalQuantity: 1.5 }
  ];

  const budget = getEstimatedBudget(list, {
    Rice: 60,
    Sugar: 45
  });

  assert.equal(budget, 187.5);
});
