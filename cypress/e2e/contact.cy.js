describe('Contact Component', () => {
  beforeEach(() => {
    cy.visit('https://patricia-apolinario-site.web.app'); // ou a URL correta do seu site
  });

  it('preenche o formulário e abre o WhatsApp com mensagem correta', () => {
    // Espiar window.open para capturar a URL que será aberta
    cy.window().then(win => {
      cy.stub(win, 'open').as('windowOpen');
    });

    // Preenche os campos
    cy.get('input[name="firstName"]').type('Manuella');
    cy.get('input[name="lastName"]').type('Silva');
    cy.get('textarea[name="message"]').type('Gostaria de mais informações.');

    // Clica no botão enviar
    cy.get('button[type="submit"]').click();

    // Monta a mensagem que deve ser enviada no WhatsApp
    const expectedText = encodeURIComponent('Manuella Silva: Gostaria de mais informações.');
    const expectedUrl = `https://wa.me/5561994449656?text=${expectedText}`;

    // Verifica se window.open foi chamado com a URL correta
    cy.get('@windowOpen').should('be.calledWith', expectedUrl, '_blank');
  });
});
