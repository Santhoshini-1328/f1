describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary&args=year;name;isChampion:false;'));
  it('should render the component', () => {
    cy.get('f1-card').should('exist');
  });
});