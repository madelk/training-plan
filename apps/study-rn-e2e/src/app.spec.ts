import { device } from 'detox';

describe('StudyRn', () => {
  // Skip e2e tests until simulator is properly configured
  it.skip('can launch app', async () => {
    await device.launchApp();
    // If we get here without error, the test passes
  });
});
