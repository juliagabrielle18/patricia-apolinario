// Ignora qualquer erro JS não tratado da aplicação
Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // impede que o teste falhe
});
