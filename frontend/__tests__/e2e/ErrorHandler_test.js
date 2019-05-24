const assert = require('assert');

Feature('ErrorHandler');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Shows error message when given inputs are not valid', (I) => {
  I.fillField('#collateral-value', '5000');
  I.fillField('#requested-amount', '5000');
  I.see('O valor solicitado não é compatível com o valor da sua garantia.');
});

Scenario('Shows invalid results in the calculator display', async (I) => {
  I.fillField('#collateral-value', '5000');
  I.fillField('#requested-amount', '5000');

  const finalAmount = await I.grabTextFrom('#loan-amount__value');
  const installmentAmount = await I.grabTextFrom('#installment__value');

  assert.strictEqual(finalAmount, "Inválido");
  assert.strictEqual(installmentAmount, 'Inválido');
});
