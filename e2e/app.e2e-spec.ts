import { StarWarsTestPage } from './app.po';

describe('star-wars-test App', () => {
  let page: StarWarsTestPage;

  beforeEach(() => {
    page = new StarWarsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
