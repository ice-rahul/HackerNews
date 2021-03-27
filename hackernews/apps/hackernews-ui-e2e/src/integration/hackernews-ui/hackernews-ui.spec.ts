describe('hackernews-ui: HackernewsUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=hackernewsui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to hackernews-ui!');
    });
});
