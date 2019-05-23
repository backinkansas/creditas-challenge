const assert = require('assert');

Feature('InputDisplay');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Displays received calculated value for total loan amount when user provides inputs', async (I) => {
  I.fillField('#collateral-value', '10000');
  I.fillField('#requested-amount', '5000');
  I.selectOption('#installments', '48');

  const finalAmount = await I.grabTextFrom('#loan-amount__value');

  assert.strictEqual(finalAmount, "R$ 5676.00");
});

Scenario('Displays received installment amount when user provides inputs', async (I) => {
  I.fillField('#collateral-value', '10000');
  I.fillField('#requested-amount', '5000');
  I.selectOption('#installments', '48');

  const installmentAmount = await I.grabTextFrom('#installment__value');

  assert.strictEqual(installmentAmount, '118.25');
});
