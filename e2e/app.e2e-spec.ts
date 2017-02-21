import { AppAcaPage } from './app.po';

describe('app-aca App', () => {
  let page: AppAcaPage;

  beforeEach(() => {
    page = new AppAcaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
