import { initializeAppMock } from '../../__mocks__/helpers';
import { clean } from '../../__mocks__/helpers';

import Mediator from '../../src/js/Mediator';
import ProductDisplay from '../../src/js/view/ProductDisplay';
import InputDisplay from '../../src/js/view/InputDisplay';
import Product from '../../src/js/Product';

import { fireEvent } from 'dom-testing-library'

jest.mock('../../src/js/view/ProductDisplay');
jest.mock('../../src/js/view/InputDisplay');
jest.mock('../../src/js/Product');

describe('Integration | Mediator', () => {
  beforeEach(() => {
    initializeAppMock(`
      <form data-testid="form" id="form">
        <select id="collateral" data-testid="collateral">
          <option value="veiculo" selected>Veículo</option>
          <option value="imovel">Imóvel</option>
        </select>
      </form>
    `)
    ProductDisplay.mockClear();
  });

  afterEach(() => {
    clean();
  });

  it('instanciates product display on constructor', function() {
    const mediator = new Mediator();

    expect(ProductDisplay).toHaveBeenCalledTimes(1);
  });

  it('instanciates product interface on product change', function() {
    const mediator = new Mediator();
    const selectElement = document.getElementById('collateral');

    mediator.attachProductChange();
    fireEvent.change(selectElement, { target: { value: "imovel" }});

    expect(Product).toHaveBeenCalledTimes(1);
  });

  it('instanciates input display class on click event', function() {
    const mediator = new Mediator();
    mediator.orderLoanSimulation();

    expect(InputDisplay).toHaveBeenCalledTimes(1);
  });
});
