export default class RangeHandler {
  constructor() {
    this.collateralRange = document.getElementById('collateral-value-range');
    this.collateralInput = document.getElementById('collateral-value');
    this.loanRange = document.getElementById('requested-amount-range');
    this.loanInput = document.getElementById('requested-amount');
  }

  createHandlers() {
    this._updateInput(this.collateralRange, this.collateralInput);
    this._updateRange(this.collateralInput, this.collateralRange);

    this._updateInput(this.loanRange, this.loanInput);
    this._updateRange(this.loanInput, this.loanRange);
  }

  _updateInput(rangeElement, inputElement) {
    rangeElement.addEventListener('change', function (event) {
      inputElement.value = Number(event.target.value) * 1000;
    });
  }

  _updateRange(inputElement, rangeElement) {
    inputElement.addEventListener('change', function(event) {
      rangeElement.value = Number(event.target.value / 1000);
    });
  }
}
