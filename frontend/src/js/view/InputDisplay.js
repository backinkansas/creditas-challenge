export default class InputDisplay {
  constructor() {
    this.formElement = document.querySelector('.form');
  }

  _getFormValues() {
    return Object.values(this.formElement.elements)
    .filter(element => ['SELECT', 'INPUT'].includes(element.nodeName))
    .map(element => ({
      field: element.name,
      value: element.value
    }));
  }

  _match(value, string) {
    return value.field.includes(string);
  }

  getLoanTerm(type) {
    const currentValues = this._getFormValues();
    const currentTermValue = currentValues.find(value => this._match(value, type)).value;
    return parseInt(currentTermValue);
  }

  setTotalLoan(amount) {
    const amountContainer = document.getElementById('loan-amount__value');
    amountContainer.innerText = `R$ ${amount.toFixed(2)}`;
  }

  setAmountFor(installment) {
    const installmentContainer = document.getElementById('installment__value');
    installmentContainer.innerText = installment.toFixed(2);
  }
}
