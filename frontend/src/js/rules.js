export const IOF = 6.38 / 100;
export const INTEREST_RATE = Number((2.34 / 100).toFixed(4));

export class LTV {
  constructor() {
    this.maxLTVAllowed = 8;
  }

  validate(collateralValue, requestedAmount) {
    const LTV = this._calculateLTV(collateralValue);

    if (requestedAmount <= LTV) return true;

    throw new Error;
  }

  _calculateLTV(collateralValue) {
    return (this.maxLTVAllowed * collateralValue) / 10;
  }
}

export class Calculator {
  calculateFinalLoanAmount(installments, loanAmount) {
    return (IOF + INTEREST_RATE + (installments / 1000) + 1) * loanAmount;
  }

  calculateInstallment(finalLoanAmount, installments) {
    return finalLoanAmount / installments;
  }
}
