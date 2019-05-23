import { Auto } from '../../src/js/products';
import { Home } from '../../src/js/products';
import Product from '../../src/js/Product';

describe('Integration | Product interface class', () => {
  it('returns correct product data when given a parameter', function() {
    const product = new Product(new Auto);
    const expected = {
      type: 'veiculo',
      installments: ['24', '36', '48'],
      minLoanAmount: 3000,
      maxLoanAmount: 100000,
      minCollateralValue: 4000,
      maxCollateralValue: 120000,
    }

    const productData = product.getProductData();

    expect(productData).toEqual(expected);
  });

  it('returns the correct installment options when method called', function() {
    const product = new Product(new Home);
    const expected = ['120', '180', '240'];

    const installments = product.getInstallments();

    expect(installments).toEqual(expected);
  })
});
