import { IOF } from '../../src/js/rules';
import { INTEREST_RATE } from '../../src/js/rules';
import { LTV } from '../../src/js/rules';
import  { Calculator } from '../../src/js/rules';

describe('Unit | IOF', () => {
  it('returns the correct IOF value', function() {
    const result = IOF;

    expect(result).toEqual(0.0638);
  });
});

describe('Unit | Interest Rate', () => {
  it('returns the correct interest rate', function() {
    const result = INTEREST_RATE;

    expect(result).toEqual(0.0234);
  });
});

describe('Unit | LTV', () => {
  describe('when checking if loan is valid', () => {
    it('throws an error when LTV is > 80%', function() {
      const LTVInstance = new LTV();
      const collateralValue = 10000;
      const requestedAmount = 8001;

      expect(() => {
        LTVInstance.validate(collateralValue, requestedAmount)
      }).toThrow();
    });

    it('returns true when LTV is <= 80%', function() {
      const LTVInstance = new LTV();
      const collateralValue = 10000;
      const requestedAmount = 8000;

      const result = LTVInstance.validate(collateralValue, requestedAmount);

      expect(result).toBe(true);
    });
  });
});

describe('Unit | Calculator', () => {
  describe('when calculating total loan operation terms', () => {
    it('returns the correct final loan amount', function() {
      const calculatorInstance = new Calculator();
      const installments = 24;
      const requestedAmount = 10000;

      const result = calculatorInstance.calculateFinalLoanAmount(installments, requestedAmount);

      expect(result).toEqual(11112);
    });

    it('returns the correct installment amount', function() {
      const calculatorInstance = new Calculator();
      const installments = 24;
      const finalAmount = 11112;

      const result = calculatorInstance.calculateInstallment(finalAmount, installments);

      expect(result).toEqual(463);

    });
  });
});
