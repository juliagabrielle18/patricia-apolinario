describe('Hero Component', () => {
  beforeEach(() => {
    cy.visit('https://patricia-apolinario-site.web.app');
  });

  it('deve exibir o botão Agende sua consulta com o link correto', () => {
    cy.get('a.btn-primary')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'https://wa.me/5561994449656?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta');
  });

  it('deve exibir o texto correto no botão', () => {
    cy.get('a.btn-primary').should('contain.text', 'Agende sua consulta');
  });

  it('deve abrir o link do WhatsApp em nova aba', () => {
    cy.get('a.btn-primary')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noopener noreferrer');
  });
});
