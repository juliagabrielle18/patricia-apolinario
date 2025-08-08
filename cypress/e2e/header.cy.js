describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('https://patricia-apolinario-site.web.app'); // ✅ URL correta
  });

  it('deve exibir o nome e subtítulo da logo', () => {
    cy.contains('Patrícia Apolinário').should('be.visible');
    cy.contains('Advocacia & Assessoria').should('be.visible');
  });

  it('deve exibir os links do menu', () => {
    cy.get('.nav-list a').should('have.length', 3);
    cy.contains('Início').should('be.visible');
    cy.contains('Serviços').should('be.visible');
    cy.contains('Contato').should('be.visible');
  });

  it('deve mostrar o botão hamburguer no mobile', () => {
    cy.viewport('iphone-6');
    cy.get('.menu-toggle').should('be.visible');
  });

  it('deve abrir e fechar o menu mobile ao clicar', () => {
    cy.viewport('iphone-6');
    cy.get('.nav').should('not.have.class', 'open');
    cy.get('.menu-toggle').click();
    cy.get('.nav').should('have.class', 'open');
    cy.get('.menu-toggle').click();
    cy.get('.nav').should('not.have.class', 'open');
  });
});
