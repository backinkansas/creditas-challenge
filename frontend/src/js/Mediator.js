import { LTV } from './rules';
import { Calculator } from './rules';
import Product from './Product';
import ProductChoice from './ProductChoice';
import InputDisplay from './view/InputDisplay';
import ProductDisplay from './view/ProductDisplay';
import RangeHandler from './view/RangeHandler';
import ErrorHandler from './view/ErrorHandler';

export default class Mediator {
  constructor() {
    this.calculator = new Calculator();
    this.LTV = new LTV();
    this.errorHandler = new ErrorHandler();
    this.productDisplay = new ProductDisplay();
    this.resultDispatcher = document.getElementById('form');
    this.selectElement = document.getElementById('collateral');
    this.productChoice = new ProductChoice(this.selectElement);
    this.currentProduct;
  }

  showProductCommomInfo() {
    this.productDisplay.displayInterestRate();
  }

  attachRangeHandlers() {
    const handler = new RangeHandler();

    handler.createHandlers();
  }

  attachProductChange() {
    this.selectElement.addEventListener('change', () => {
      this.currentProduct = this.productChoice.setProduct();
      const product = new Product(this.currentProduct);

      const productData = product.getProductData();
      this.productDisplay.updateProduct(productData);
    });
  }

  orderLoanSimulation() {
    const inputHandler = new InputDisplay();

    this.resultDispatcher.addEventListener('change', () => {
      const selectedInstallments = inputHandler.getLoanTerm('installments');
      const requestedAmount = inputHandler.getLoanTerm('requested-amount');
      const collateralValue = inputHandler.getLoanTerm('collateral-value');

      try {
        this.LTV.validate(collateralValue, requestedAmount);

        const finalAmount = this.calculator.calculateFinalLoanAmount(selectedInstallments, requestedAmount);
        const installmentValue = this.calculator.calculateInstallment(finalAmount, selectedInstallments);

        inputHandler.setTotalLoan(finalAmount);
        inputHandler.setAmountFor(installmentValue);

        this.errorHandler.hideAlert();
      } catch(error) {
        this.errorHandler.alert();
      }
    });
  }
}
