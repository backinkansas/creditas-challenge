const assert = require('assert');

Feature('RangeHandler');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Updates input value when slider is draged', (I) => {
  I.dragSlider('#collateral-value-range', 8); //Slider position starts at 0
  I.seeInField('#collateral-value', '7000');
});

Scenario('Updates range slider when given input', async (I) => {
  I.fillField('#requested-amount', '7000');
  I.pressKey('Enter');

  const result = await I.grabValueFrom('#requested-amount-range');

  assert.strictEqual(result, '7');
});
