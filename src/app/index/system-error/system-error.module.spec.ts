import { SystemErrorModule } from './system-error.module';

describe('SystemErrorModule', () => {
  let systemErrorModule: SystemErrorModule;

  beforeEach(() => {
    systemErrorModule = new SystemErrorModule();
  });

  it('should create an instance', () => {
    expect(systemErrorModule).toBeTruthy();
  });
});
