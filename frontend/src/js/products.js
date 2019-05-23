export class Auto {
  constructor() {
    this.type = 'veiculo';
    this.installments = ['24', '36', '48'];
    this.minLoanAmount = 3000;
    this.maxLoanAmount = 100000;
    this.minCollateralValue = 4000;
    this.maxCollateralValue = 120000;
  }

  getInstallments() {
    return this.installments;
  }

  getProductData() {
    return this;
  }
}

export class Home {
  constructor() {
    this.type = 'imóvel';
    this.installments = ['120', '180', '240'];
    this.minLoanAmount = 30000;
    this.maxLoanAmount = 4500000;
    this.minCollateralValue = 40000;
    this.maxCollateralValue = 5400000;
  }

  getInstallments() {
    return this.installments;
  }

  getProductData() {
    return this;
  }
}

