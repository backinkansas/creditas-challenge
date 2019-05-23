import { INTEREST_RATE } from '../rules';

export default class ProductDisplay {
  constructor() {
    this.loanAmountInput = document.getElementById('valor-emprestimo');
    this.loanAmountRange = document.getElementById('valor-emprestimo-range');

    this.minLoanText = document.getElementById('valor-emprestimo-min');
    this.maxLoanText = document.getElementById('valor-emprestimo-max');

    this.installments = document.getElementById('parcelas');

    this.collateralValueInput = document.getElementById('valor-garantia');
    this.collateralValueRange = document.getElementById('valor-garantia-range');

    this.minCollateralValue = document.getElementById('valor-garantia-min');
    this.maxCollateralValue = document.getElementById('valor-garantia-max');
  }

  updateProduct(data) {
    this._updateInstallments(data);
    this._updateCollateralValue(data);
    this._updateLoanAmount(data);
  }

  displayInterestRate() {
    const interestRateDOM = document.getElementById('taxa-de-juros');
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
