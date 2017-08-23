import { NMDVPage } from './app.po';

describe('nmdv App', () => {
  let page: NMDVPage;

  beforeEach(() => {
    page = new NMDVPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
