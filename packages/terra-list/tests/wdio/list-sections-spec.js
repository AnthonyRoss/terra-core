/* global browser, Terra */
const viewports = Terra.viewports('medium');

describe('List with Sections', () => {
  describe('Single Selectable List with Sections', () => {
    beforeEach(() => browser.url('/#/raw/tests/list/single-select-sections'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Multi Selectable List with Sections', () => {
    beforeEach(() => browser.url('/#/raw/tests/list/multi-select-sections'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
