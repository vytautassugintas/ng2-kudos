import { Ng2KudosPage } from './app.po';

describe('ng2-kudos App', function() {
  let page: Ng2KudosPage;

  beforeEach(() => {
    page = new Ng2KudosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
