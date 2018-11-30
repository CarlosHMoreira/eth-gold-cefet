import { BalancesModule } from './balances.module';

describe('BalancesModule', () => {
  let balancesModule: BalancesModule;

  beforeEach(() => {
    balancesModule = new BalancesModule();
  });

  it('should create an instance', () => {
    expect(balancesModule).toBeTruthy();
  });
});
