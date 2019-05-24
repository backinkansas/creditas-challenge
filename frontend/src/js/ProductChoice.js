import { Auto } from './products';
import { Home } from './products';

const creditasProducts = {
  'veiculo': new Auto(),
  'imovel': new Home()
}

export default class ProductChoice {
  constructor(selectElement) {
    this.productOptions = Array.from(selectElement.options);
  }

  _getProductChoice() {
    return this.productOptions.find(element => element.selected === true).value;
  }

  setProduct() {
    const customerChoice = this._getProductChoice();
    return creditasProducts[customerChoice];
  }
}
