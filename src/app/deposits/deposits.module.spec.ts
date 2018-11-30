import { DepositsModule } from './deposits.module';

describe('DepositsModule', () => {
  let depositsModule: DepositsModule;

  beforeEach(() => {
    depositsModule = new DepositsModule();
  });

  it('should create an instance', () => {
    expect(depositsModule).toBeTruthy();
  });
});
