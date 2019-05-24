const assert = require('assert');

Feature('ProductDisplay');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Updates installment options when procuct is selected', async (I) => {
  I.selectOption('#collateral', 'Imóvel');
  const options = await I.grabHTMLFrom('#installments');

  const expected = `<option value="120">120</option><option value="180">180</option><option value="240">240</option>`;
  assert.strictEqual(options, expected);
});

Scenario('Updates loan amount max and min values when product is selected', async (I) => {
  I.selectOption('#collateral', 'Imóvel');
  const min = await I.grabAttributeFrom('#requested-amount-range', 'min');
  const max = await I.grabAttributeFrom('#requested-amount-range', 'max');

  assert.strictEqual(min, '30');
  assert.strictEqual(max, '4500');
});
