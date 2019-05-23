export default class Product {
  constructor(product) {
    this.product = product;
  }

  getInstallments() {
    return this.product.getInstallments();
  }

  getProductData() {
    return this.product.getProductData();
  }
}
