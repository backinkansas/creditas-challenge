import { INTEREST_RATE } from '../rules';

export default class ProductDisplay {
  constructor() {
    this.loanAmountInput = document.getElementById('requested-amount');
    this.loanAmountRange = document.getElementById('requested-amount-range');

    this.minLoanText = document.getElementById('requested-amount-min');
    this.maxLoanText = document.getElementById('requested-amount-max');

    this.installments = document.getElementById('installments');

    this.collateralValueInput = document.getElementById('collateral-value');
    this.collateralValueRange = document.getElementById('collateral-value-range');

    this.minCollateralValue = document.getElementById('collateral-value-min');
    this.maxCollateralValue = document.getElementById('collateral-value-max');
  }

  updateProduct(data) {
    this._updateInstallments(data);
    this._updateCollateralValue(data);
    this._updateLoanAmount(data);
  }

  displayInterestRate() {
    const interestRateDOM = document.getElementById('interest-rate');
    const normalizedInterestRate = parseFloat((INTEREST_RATE * 100).toFixed(2));
    interestRateDOM.innerText = `${normalizedInterestRate} %`;
  }

  _updateInstallments(data) {
    this.installments.innerHTML = data.installments.map(element => {
      return `<option value="${element}">${element}</option>`
    }).join('');
  }

  _updateCollateralValue(data) {
    const minCollateralValue = this._normalizeValue(data.minCollateralValue);
    const maxCollateralValue = this._normalizeValue(data.maxCollateralValue);

    this.collateralValueRange.setAttribute('min', minCollateralValue);
    this.collateralValueRange.setAttribute('max', maxCollateralValue);
    this.minCollateralValue.innerText = `${minCollateralValue}.000`;
    this.maxCollateralValue.innerText = `${maxCollateralValue}.000`;

    this.collateralValueInput.value = data.minCollateralValue;
  }

  _updateLoanAmount(data) {
    const minLoanAmount = this._normalizeValue(data.minLoanAmount);
    const maxLoanAmount = this._normalizeValue(data.maxLoanAmount);

    this.loanAmountRange.setAttribute('min', minLoanAmount);
    this.loanAmountRange.setAttribute('max', maxLoanAmount);
    this.minLoanText.innerText = `${minLoanAmount}.000`;
    this.maxLoanText.innerText = `${maxLoanAmount}.000`;

    this.loanAmountInput.value = data.minLoanAmount;
  }

  _normalizeValue(value) {
    return value / 1000
  }
}
