import './styles.css'
import Mediator from './js/Mediator';

export default class CreditasChallenge {
  static initialize() {
    this.registerEvents();
  }

  static registerEvents() {
    const mediator = new Mediator();
    mediator.showProductCommomInfo();
    mediator.attachRangeHandlers();
    mediator.attachProductChange();
    mediator.orderLoanSimulation();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  CreditasChallenge.initialize();
})
