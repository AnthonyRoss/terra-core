/* global browser, Terra, before */
describe('Content Container', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-content-container/content-container/default-content-container'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-content-container/content-container/fill-content-container'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
