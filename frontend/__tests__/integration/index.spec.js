import CreditasChallenge from '../../src/index';
import Mediator from '../../src/js/Mediator';

jest.mock('../../src/js/Mediator');

describe('Integration | Creditas Challenge', () => {
  it('instantiates mediator on DOM loaded', function() {
    CreditasChallenge.initialize();

    expect(Mediator).toHaveBeenCalledTimes(1);
  })

  it('calls dependency methods on initialization', function() {
    CreditasChallenge.initialize();

    const mediatorInstance = Mediator.mock.instances[0];

    const mockShowProductCommomInfo = mediatorInstance.showProductCommomInfo;
    const mockAttachRangeHandlers = mediatorInstance.attachRangeHandlers;
    const mockAttachProductChange = mediatorInstance.attachProductChange;
    const mockOrderLoanSimulation = mediatorInstance.orderLoanSimulation;

    expect(mockShowProductCommomInfo).toHaveBeenCalledTimes(1);
    expect(mockAttachRangeHandlers).toHaveBeenCalledTimes(1);
    expect(mockAttachProductChange).toHaveBeenCalledTimes(1);
    expect(mockOrderLoanSimulation).toHaveBeenCalledTimes(1);
  });
});
