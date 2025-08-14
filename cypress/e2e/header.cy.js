describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('https://patricia-apolinario-site.web.app');
  });

  it('deve exibir o nome e subtítulo da logo', () => {
    cy.contains('Patrícia Apolinário', { timeout: 10000 }).should('be.visible');
    cy.contains('Advocacia & Assessoria', { timeout: 10000 }).should('be.visible');
  });

  it('deve exibir os links do menu (desktop)', () => {
    cy.viewport(1280, 800); // Desktop
    cy.get('.nav-list a', { timeout: 10000 }).should('have.length', 3);
    cy.contains('Início').should('be.visible');
    cy.contains('Serviços').should('be.visible');
    cy.contains('Contato').should('be.visible');
  });

  it('deve mostrar o botão hamburguer no mobile', () => {
    cy.viewport('iphone-6'); // Mobile
    cy.get('.menu-toggle', { timeout: 10000 }).should('be.visible');
  });

  it('deve abrir e fechar o menu mobile ao clicar', () => {
    cy.viewport('iphone-6');
    cy.get('.menu-toggle', { timeout: 10000 }).should('be.visible').click();
    cy.get('.nav').should('have.class', 'open');
    cy.get('.menu-toggle').click();
    cy.get('.nav').should('not.have.class', 'open');
  });
});
