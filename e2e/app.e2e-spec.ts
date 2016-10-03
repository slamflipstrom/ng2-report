import { ReportComponentPage } from './app.po';

describe('report-component App', function() {
  let page: ReportComponentPage;

  beforeEach(() => {
    page = new ReportComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
