export default class ErrorHandler {
  alert() {
    const amountContainer = document.querySelector('.form-result__value');
    const installmentContainer = document.querySelector('.installment__value');
    const badRequestText = document.querySelector('.bad-request');

    amountContainer.innerText = "Inválido";
    installmentContainer.innerHTML = "Inválido";
    badRequestText.classList.add('bad-request--visible');
  }

  hideAlert() {
    const badRequestText = document.querySelector('.bad-request');
    badRequestText.classList.remove('bad-request--visible')
  }
}
