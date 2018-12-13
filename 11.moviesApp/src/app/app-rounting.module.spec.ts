import { AppRountingModule } from './app-rounting.module';

describe('AppRountingModule', () => {
  let appRountingModule: AppRountingModule;

  beforeEach(() => {
    appRountingModule = new AppRountingModule();
  });

  it('should create an instance', () => {
    expect(appRountingModule).toBeTruthy();
  });
});
