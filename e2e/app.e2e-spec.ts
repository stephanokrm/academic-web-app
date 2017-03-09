import { AcademicPage } from './app.po';

describe('academic App', () => {
  let page: AcademicPage;

  beforeEach(() => {
    page = new AcademicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
