describe('repro: Repro component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=repro--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Repro!');
    });
});
