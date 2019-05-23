export default class RangeHandler {
  constructor() {
    this.collateralRange = document.getElementById('valor-garantia-range');
    this.collateralInput = document.getElementById('valor-garantia');
    this.loanRange = document.getElementById('valor-emprestimo-range');
    this.loanInput = document.getElementById('valor-emprestimo');
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
