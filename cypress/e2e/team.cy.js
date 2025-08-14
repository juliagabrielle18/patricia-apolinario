describe('Team Component', () => {
  beforeEach(() => {
    cy.visit('https://patricia-apolinario-site.web.app'); // ou localhost
  });

  it('deve exibir o botão Agende sua Consulta e abrir WhatsApp ao clicar', () => {
    // Espiar window.open
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    cy.contains('button', 'Agende sua Consulta')
      .should('be.visible')
      .click();

    cy.get('@windowOpen').should('be.calledWith', 
      'https://wa.me/61994449656?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.', '_blank');
  });
});
